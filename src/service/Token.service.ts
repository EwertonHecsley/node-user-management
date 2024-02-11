import 'dotenv/config';
import jwt, { Secret } from 'jsonwebtoken';

type Payload = {
    id: number;
    username: string;
    email: string;
}

export class TokenService {
    async generateToken(data: Payload): Promise<string> {
        const token = jwt.sign(data, process.env.JWT_KEY as Secret, { expiresIn: '1h' });
        return token;
    }

    async verifyToken(token: string) {
        return jwt.verify(token, process.env.JWT_KEY as Secret);
    }
}