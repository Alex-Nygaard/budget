import User from './User';
import Sheet from './Sheet';

// User.hasMany(Sheet, {
//     as: "sheets",
//     onDelete: 'CASCADE',
//     onUpdate: 'RESTRICT',
// })

// Sheet.belongsTo(User, {
//     foreignKey: "userid",
//     as: "user",
// })

export {
    User,
    Sheet,
}