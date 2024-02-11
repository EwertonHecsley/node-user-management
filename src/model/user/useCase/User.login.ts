import { DatabaseService } from "../../../database/Database.service";
import { IUSer } from "../../../interface/User";

export class UserLoginService {
    private userDatabaseService: DatabaseService;

    constructor(private usernameOrEmail: string) {
        this.userDatabaseService = new DatabaseService();
    }

    async login(): Promise<IUSer | undefined> {
        const username = await this.userDatabaseService.getUSerByUsername(this.usernameOrEmail);
        const email = await this.userDatabaseService.getUserByEmail(this.usernameOrEmail);

        return username ? username : email;

    }

}