import { Request, Response } from "express";
import { UserGetModel } from "../../model/user/User.get.model";

export class UserController {
    async getUsers(_req: Request, res: Response) {
        const userModel = new UserGetModel();
        const result = await userModel.getAllUsers();
        return res.json(result);
    };


}