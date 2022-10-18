import { Sheet } from '../models'

export const getById = async (id: number): Promise<Sheet> => {
    const sheet = await Sheet.findByPk(id)
    if (!sheet) {
        throw new Error(`Sheet with id ${id} not found.`)
    }
    return sheet
}

export const create = async (payload: Sheet): Promise<Sheet> => {
    const sheet = await Sheet.create(payload)
    return sheet
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedSheetCount = await Sheet.destroy({
        where: { id },
    })

    return !!deletedSheetCount
}

export const update = async (
    id: number,
    payload: Partial<Sheet>
): Promise<Sheet> => {
    const [countAffectedRows, updatedSheets] = await Sheet.update(payload, {
        where: {
            id: id,
        },
        returning: true,
    })
    return updatedSheets[0]
}

export const getAll = async (): Promise<Sheet[]> => {
    const sheets = await Sheet.findAll()
    return sheets
}
