import User from './User'
import Sheet from './Sheet'

User.hasMany(Sheet, { as: 'Sheets' })
Sheet.belongsTo(User)

export { User, Sheet }
