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

    async getUserByEmail(email: string): Promise<IUSer | undefined> {
        return await this.databaseService.getUserByEmail(email);
    }

    async getUserByUsername(username: string): Promise<IUSer | undefined> {
        return await this.databaseService.getUSerByUsername(username);
    }

    async getUserById(id: number): Promise<IUSer | undefined> {
        return await this.databaseService.getUserById(id);
    }
}