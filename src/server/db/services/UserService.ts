import { userRepo } from '../repositories'
import { Sheet, User } from '../models'

export const getById = async (id: number): Promise<User> => {
    return userRepo.getById(id)
}

export const getAll = async (): Promise<User[]> => {
    return userRepo.getAll()
}

export const create = async (payload: User): Promise<User> => {
    return userRepo.create(payload)
}

export const update = async (
    id: number,
    payload: Partial<User>
): Promise<User> => {
    return userRepo.update(id, payload)
}

export const deleteById = async (id: number): Promise<boolean> => {
    return userRepo.deleteById(id)
}

export const getAllSheetsByUserId = async (id: number): Promise<Sheet[]> => {
    const sheets = await userRepo.getAllSheetsByUserId(id)
    return sheets
}
