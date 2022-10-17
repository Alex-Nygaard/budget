import {Sheet} from '../models';
import {SheetInput, SheetOutput} from '../models/Sheet';

export const create = async (payload: SheetInput): Promise<SheetOutput> => {
    const sheet = await Sheet.create(payload);
    return sheet;
}