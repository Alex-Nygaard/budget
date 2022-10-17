require('dotenv').config()

import { User, Sheet } from './models'

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => Promise.all([
  User.sync({ alter: isDev }),
  Sheet.sync({ alter: isDev }),
])

export default dbInit;