import { DatabaseService } from "../../../database/Database.service";
import { IUSer } from "../../../interface/User";
import { HttpException } from "../../../middleware/HttpException";
import { HashService } from "../../../service/Hash.service";
import { UserCreateModel } from "../User.create.model";

export class UserService {
    private userServiceHash: HashService;
    private userDatabaseService: DatabaseService;

    constructor(private user: IUSer) {
        this.userServiceHash = new HashService();
        this.userDatabaseService = new DatabaseService();
    }

    async create(): Promise<IUSer[]> {
        const { name, username, email, password } = this.user;

        const usernameExist = await this.userDatabaseService.getUSerByUsername(username);
        if (usernameExist) throw new HttpException(400, 'Username já existe.')

        const emailExist = await this.userDatabaseService.getUserByEmail(email);
        if (emailExist) throw new HttpException(400, 'Email já existe.')

        const hashedPassword = await this.userServiceHash.hashPassword(password);

        const user = new UserCreateModel({ name, username, email, password: hashedPassword });

        return await user.createUser();
    }
}
