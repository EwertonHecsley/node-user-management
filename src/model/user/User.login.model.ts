import { ILogin } from "../../interface/Login";
import { HttpException } from "../../middleware/HttpException";
import { HashService } from "../../service/Hash.service";
import { TokenService } from "../../service/Token.service";
import { UserLoginService } from "./useCase/User.login";

export class UserLoginModel {
    private hasPasswordService: HashService;
    private loginService: UserLoginService;
    private tokenService: TokenService

    constructor(private userData: ILogin) {
        this.hasPasswordService = new HashService();
        this.loginService = new UserLoginService(this.userData.usernameOrEmail);
        this.tokenService = new TokenService();
    }

    async login() {
        const user = await this.loginService.login();
        if (!user) throw new HttpException(401, 'Username ou Email inválido.');

        const passwordIsValid = await this.hasPasswordService.comparePassword(this.userData.password, user.password);
        if (!passwordIsValid) throw new HttpException(401, 'Password inválido.');

        if (user.id === undefined) {
            throw new HttpException(500, 'ID do usuário não está definido.');
        }

        const token = await this.tokenService.generateToken({
            id: user.id,
            username: user.username,
            email: user.email
        });

        return {
            user,
            token
        }
    };
}