import {User} from '../models';

export const getById = async (id: number): Promise<User> => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error(`User with id ${id} not found.`)
    }
    return user
}

export const create = async (payload: User): Promise<User> => {
    const user = await User.create(payload);
    return user;
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedUserCount = await User.destroy({
        where: {id}
    })

    return !!deletedUserCount
}

export const update = async (id: number, payload: Partial<User>): Promise<User> => {
    const [countAffectedRows, updatedUsers] = await User.update(payload, {
        where: {
            id: id
        },
        returning: true,
    });
    return updatedUsers[0];
}

export const getAll = async (): Promise<User[]> => {
    const users = await User.findAll()
    return users
}

