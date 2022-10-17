import * as userRepo from '../repositories/user';
import {UserInput, UserOutput} from '../models/User';

/*
Functions:

getById
getAll
create
update
deleteById
*/

export const getById = async (id: number): Promise<UserOutput> => {
    return userRepo.getById(id);
}

export const getAll = async (): Promise<UserOutput[]> => {
    return userRepo.getAll();
}

export const create = async (payload: UserInput): Promise<UserOutput> => {
    return userRepo.create(payload);
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    return userRepo.update(id, payload);
}

export const deleteById = async (id: number): Promise<boolean> => {
    return userRepo.deleteById(id);
}

