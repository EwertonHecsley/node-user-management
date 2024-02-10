import knex from './connection';
import { IUSer } from '../interface/User';

export class DatabaseService {
    async getAllUsers(): Promise<IUSer[]> {
        return await knex<IUSer>('users').select('*').orderBy('id');
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

    async updateUser(id: number, data: IUSer): Promise<IUSer[]> {
        return await knex<IUSer>('users').where({ id }).update(data).returning('*');
    }
}