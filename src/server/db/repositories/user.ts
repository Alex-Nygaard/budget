import {User} from '../models';
import {UserInput, UserOutput} from '../models/User';

export const getById = async (id: number): Promise<UserOutput> => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error(`User with id ${id} not found.`)
    }

    return user
}

export const create = async (payload: UserInput): Promise<UserOutput> => {
    const user = await User.create(payload);
    return user;
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedUserCount = await User.destroy({
        where: {id}
    })

    return !!deletedUserCount
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    const user = await User.findByPk(payload.id)

    if (!user) {
        // user not found
        throw new Error('not found');
    }

    const updatedUser = await user.update(payload);
    return updatedUser;
}

export const getAll = async (): Promise<UserOutput[]> => {
    return User.findAll();
}

