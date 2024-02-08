import 'dotenv/config';
import knex from 'knex';

const config = knex({
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT as unknown as number,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
    }
});

export default config;