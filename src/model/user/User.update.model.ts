import { DatabaseService } from "../../database/Database.service";
import { IUSer } from "../../interface/User";
import { HttpException } from "../../middleware/HttpException";
import { HashService } from "../../service/Hash.service";

export class UserUpdateModel {
    private userDatabaseService: DatabaseService;

    constructor(private user: IUSer) {
        this.userDatabaseService = new DatabaseService();
    }

    async updateUser(id: number) {
        return await this.userDatabaseService.updateUser(id, this.user);
    }

}