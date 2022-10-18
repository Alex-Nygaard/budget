import { sheetService } from '../db/services'
import { Sheet } from '../db/models'

/*
Functions:

getById
getAll
create
update
deleteById
*/

export const getById = async (id: number): Promise<Sheet> => {
    return await sheetService.getById(id)
}

export const getAll = async (): Promise<Sheet[]> => {
    return await sheetService.getAll()
}

export const create = async (payload: Sheet): Promise<Sheet> => {
    return await sheetService.create(payload)
}

export const update = async (
    id: number,
    payload: Partial<Sheet>
): Promise<Sheet> => {
    return await sheetService.update(id, payload)
}

export const deleteById = async (id: number): Promise<boolean> => {
    return await sheetService.deleteById(id)
}
