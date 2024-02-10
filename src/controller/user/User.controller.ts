import { Request, Response } from "express";
import { UserGetModel } from "../../model/user/User.get.model";
import { UserService } from "../../model/user/useCase/User.create";
import { ZodError } from 'zod';
import { createUserSchema } from '../../schema/user/user.schema';

export class UserController {
    async getUsers(_req: Request, res: Response) {
        const userModel = new UserGetModel();
        const users = await userModel.getAllUsers();

        const result = users.map((user) => {
            const { password: _, ...resultFormated } = user;
            return resultFormated;
        })

        return res.json(result);
    };

    async createUser(req: Request, res: Response) {

        try {
            await createUserSchema.parseAsync(req.body);
        } catch (error) {
            if (error instanceof ZodError) return res.status(400).json({ mensagem: error.issues[0].message });
        }

        const userService = new UserService(req.body);
        const user = await userService.create();

        const { password: _, ...result } = user[0];

        return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso.', usuario: result });
    }

    async getUserById(req: Request, res: Response) {
        const { id } = req.params;
        const user = await new UserGetModel().getUserById(parseInt(id));

        return user ? res.json({ ...user, password: undefined }) : res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    async getUserByUsername(req: Request, res: Response) {
        const { username } = req.params;
        const user = await new UserGetModel().getUserByUsername(username);

        return user ? res.json({ ...user, password: undefined }) : res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    async getUserByEmail(req: Request, res: Response) {
        const { email } = req.params;
        const user = await new UserGetModel().getUserByEmail(email);

        return user ? res.json({ ...user, password: undefined }) : res.status(404).json({ mensagem: 'Usuário não encontrados.' });
    }

}
