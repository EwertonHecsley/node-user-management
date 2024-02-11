import { DatabaseService } from "../../../database/Database.service";
import { IUSer } from "../../../interface/User";
import { HttpException } from "../../../middleware/HttpException";
import { HashService } from "../../../service/Hash.service";
import { UserUpdateModel } from "../User.update.model";

export class UserUpdateService {
    private userServiceHash: HashService;
    private userDatabaseService: DatabaseService;

    constructor(private user: IUSer) {
        this.userServiceHash = new HashService();
        this.userDatabaseService = new DatabaseService();
    }

    async updateUSer(): Promise<IUSer[]> {
        const { id, name, username, email, password } = this.user;

        if (id === undefined) {
            throw new HttpException(400, 'ID do usuário não fornecido.');
        }

        const userIdExist = await this.userDatabaseService.getUserById(id);

        if (!userIdExist) {
            throw new HttpException(404, 'Usuário não encontrado.');
        }

        const usernameExist = await this.userDatabaseService.getUSerByUsername(username);
        if (usernameExist) {
            throw new HttpException(400, 'Username já existe.');
        }

        const emailExist = await this.userDatabaseService.getUserByEmail(email);
        if (emailExist) {
            throw new HttpException(400, 'Email já existe.');
        }

        const hashedPassword = await this.userServiceHash.hashPassword(password);

        const user = new UserUpdateModel({ name, username, email, password: hashedPassword });

        return await user.updateUser(id);
    }
}