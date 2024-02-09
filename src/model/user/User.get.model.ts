import { DatabaseService } from "../../database/Database.service";
import { IUSer } from "../../interface/User";

export class UserGetModel {
    private databaseService: DatabaseService;

    constructor() {
        this.databaseService = new DatabaseService();
    }

    async getAllUsers(): Promise<IUSer[]> {
        return await this.databaseService.getAllUsers();
    }
}