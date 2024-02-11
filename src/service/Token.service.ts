import 'dotenv/config';
import jwt, { Secret } from 'jsonwebtoken';
import { DatabaseService } from '../database/Database.service';

export class TokenService {
    private databaseService: DatabaseService;

    constructor() {
        this.databaseService = new DatabaseService();
    }

    async generateToken(email: string): Promise<string | undefined> {
        const data = await this.databaseService.getUserByEmail(email);
        return data && jwt.sign({ id: data.id }, process.env.JWT_KEY as Secret, { expiresIn: '1d' });
    }

    async verifyToken(token: string) {
        return jwt.verify(token, process.env.JWT_KEY as Secret);
    }
}