import {Router} from 'express'

import userRouter from "./users"
import sheetRouter from './sheets'

const router = Router();

router.use('/users', userRouter)
router.use('/sheets', sheetRouter)

export default router;