import { Dialect, Sequelize } from 'sequelize'

const sequelizeConnection = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
        logging: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000,
        },
    }
)

export default sequelizeConnection
