import knex from './connection';
import { IUSer } from '../interface/User';

export class DatabaseService {
    async getAllUsers(): Promise<IUSer[]> {
        return await knex<IUSer>('users').select('*');
    }

    async createUser(data: IUSer): Promise<IUSer[]> {
        return await knex<IUSer>('users').insert(data).returning('*');
    }

    async getUserByEmail(email: string): Promise<IUSer | undefined> {
        return await knex<IUSer>('users').where({ email }).first();
    }

    async getUSerByUsername(username: string): Promise<IUSer | undefined> {
        return await knex<IUSer>('users').where({ username }).first();
    }

    async getUserById(id: number): Promise<IUSer | undefined> {
        return await knex<IUSer>('users').where({ id }).first();
    }
}