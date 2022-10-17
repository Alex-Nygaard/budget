import {User} from '../../interfaces';
import * as mapper from './mapper';
import * as userService from '../../db/services/UserService';
import { UserInput, UserOutput } from '../../db/models/User';

/*
Functions:

getById
getAll
create
update
deleteById
*/

export const getById = async (id: number): Promise<User> => {
    return mapper.toUser(await userService.getById(id));
}

export const getAll = async (): Promise<User[]> => {
    return (await userService.getAll()).map(mapper.toUser);
}

export const create = async (payload: UserOutput): Promise<User> => {
    return mapper.toUser(await userService.create(payload));
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<User> => {
    return mapper.toUser(await userService.update(id, payload))
}

export const deleteById = async (id: number): Promise<boolean> => {
    return await userService.deleteById(id);
}