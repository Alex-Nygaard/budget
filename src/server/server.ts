import * as dotenv from 'dotenv'
dotenv.config()
import http from 'http'
import express, {
    ErrorRequestHandler,
    Express,
    NextFunction,
    Request,
    Response,
} from 'express'
import morgan from 'morgan'
import dbInit from './db/init'
import router from './routes'

const app: Express = express()

dbInit() // initialize database

/** Logging */
app.use(morgan('dev'))
/** Parse the request */
app.use(express.urlencoded({ extended: false }))
/** Takes care of JSON data */
app.use(express.json())

/** RULES OF OUR API */
app.use((req: Request, res: Response, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*')
    // set the CORS headers
    res.header(
        'Access-Control-Allow-Headers',
        'origin, X-Requested-With,Content-Type,Accept, Authorization'
    )
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST')
        return res.status(200).json({})
    }
    next()
})

/** Routes */
app.use('/', router)

// TODO make separate file
const errorHandler: ErrorRequestHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(404).send({
        message: err.message, // CHANGE FOR PRODUCTION
    })
}

/** Error handling */
app.use(errorHandler)

/** Server */
const httpServer = http.createServer(app)
const PORT: any = process.env.PORT ?? 6060
httpServer.listen(PORT, () =>
    console.log(`The server is running on port ${PORT}`)
)
