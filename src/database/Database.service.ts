import knex from './connection';
import { IUSer } from '../interface/User';

export class DatabaseService {
    async getAllUsers(): Promise<IUSer[]> {
        return await knex<IUSer>('users').select('*');
    }
}