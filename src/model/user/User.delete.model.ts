import { DatabaseService } from "../../database/Database.service";

export class UserDeleteModel {
    private userDatabaseService: DatabaseService;

    constructor(private id: number) {
        this.userDatabaseService = new DatabaseService();
    }

    async deleteUser() {
        return await this.userDatabaseService.deleteUser(this.id);
    }
}