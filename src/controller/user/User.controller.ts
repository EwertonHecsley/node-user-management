import { Request, Response } from "express";
import { UserGetModel } from "../../model/user/User.get.model";
import { UserService } from "../../model/user/useCase/User.create";

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
        const userService = new UserService(req.body);
        const user = await userService.create();

        const { password: _, ...result } = user[0];

        return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso.', usuario: result });
    }

}