import { userService } from '../db/services'
import { Sheet, User } from '../db/models'

/*
Functions:

getById
getAll
create
update
deleteById
*/

export const getById = async (id: number): Promise<User> => {
    return await userService.getById(id)
}

export const getAll = async (): Promise<User[]> => {
    return await userService.getAll()
}

export const create = async (payload: User): Promise<User> => {
    return await userService.create(payload)
}

export const update = async (
    id: number,
    payload: Partial<User>
): Promise<User> => {
    return await userService.update(id, payload)
}

export const deleteById = async (id: number): Promise<boolean> => {
    return await userService.deleteById(id)
}

export const getAllSheetsByUserId = async (id: number): Promise<Sheet[]> => {
    const sheets = await userService.getAllSheetsByUserId(id)
    return sheets
}
