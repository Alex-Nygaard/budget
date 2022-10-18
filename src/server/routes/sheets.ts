import {Sheet} from '../db/models'
import {sheetController} from '../controllers'
import { Router, Request, Response } from "express"

const sheetRouter = Router()


sheetRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    try {
        const result = await sheetController.getById(id)
        return res.status(200).send(result);
    } catch (error) {
        return res.status(404).send({err: "Not found."})
    }
});

sheetRouter.post('/', async (req: Request, res: Response) => {
    const payload: Sheet = req.body
    try {
        const result = await sheetController.create(payload);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send({err: "Invalid sheet object."})
    }
});

sheetRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const payload: Partial<Sheet> = req.body
        const result = await sheetController.update(id, payload);
        return res.status(201).send(result);
    } catch (error) {
        return res.status(400).send({err: "Bad request."})
    }
});

sheetRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const result = await sheetController.deleteById(id);
        return res.status(202).send({
            success: result
        });
    } catch (error) {
        return res.status(400).send({err: "Bad request."})
    }
});

sheetRouter.get('/', async (req: Request, res: Response) => {
    try {
        const result = await sheetController.getAll();
        return res.status(200).send(result);
    } catch (error) {
        return res.status(404).send({err: "Not found."})
    }
});


export default sheetRouter