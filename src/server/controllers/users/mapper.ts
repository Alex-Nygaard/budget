import {UserOutput} from '../../db/models/User';
// import {User} from '../../interfaces'

export const toUser = (user: UserOutput) => ({
    id: user.id,
    name: user.name,
    email: user.email,
})