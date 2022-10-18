import {sheetRepo} from '../repositories'
import {Sheet} from '../models'

/*
Functions:

getById
getAll
create
update
deleteById
*/

export const getById = async (id: number): Promise<Sheet> => {
    return sheetRepo.getById(id);
}

export const getAll = async (): Promise<Sheet[]> => {
    return sheetRepo.getAll();
}

export const create = async (payload: Sheet): Promise<Sheet> => {
    return sheetRepo.create(payload);
}

export const update = async (id: number, payload: Partial<Sheet>): Promise<Sheet> => {
    return sheetRepo.update(id, payload);
}

export const deleteById = async (id: number): Promise<boolean> => {
    return sheetRepo.deleteById(id);
}

