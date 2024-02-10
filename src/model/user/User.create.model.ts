import { DatabaseService } from "../../database/Database.service";
import { IUSer } from "../../interface/User";

export class UserCreateModel {
    private databaseService: DatabaseService;

    constructor(private user: IUSer) {
        this.databaseService = new DatabaseService();
    }

    async createUser() {
        return await this.databaseService.createUser(this.user);
    }
}