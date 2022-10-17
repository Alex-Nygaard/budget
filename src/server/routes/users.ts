import User from '../db/models/User'
import { Router, Request, Response } from "express";
import * as userController from '../controllers/users/userController';

const userRouter = Router();

userRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    try {
        const result = await userController.getById(id)
        return res.status(200).send(result);
    } catch (error) {
        return res.status(404).send({err: "Not found."})
    }
});

userRouter.post('/', async (req: Request, res: Response) => {
    const payload: User = req.body
    try {
        const result = await userController.create(payload);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send({err: "Invalid user object."})
    }
});

userRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const payload: Partial<User> = req.body
        const result = await userController.update(id, payload);
        return res.status(201).send(result);
    } catch (error) {
        
    }
    
});

userRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const result = await userController.deleteById(id);
        return res.status(204).send({
            success: result
        });
    } catch (error) {
        return res.status(400).send({err: "Bad request."})
    }
});

userRouter.get('/', async (req: Request, res: Response) => {
    try {
        const result = userController.getAll();
        return res.status(200).send(result);
    } catch (error) {
        return res.status(404).send({err: "Not found."})
    }
    
});

export default userRouter;