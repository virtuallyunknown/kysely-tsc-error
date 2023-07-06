import pg from 'pg';
import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely';
import type { DB } from './db-types.js';

const { Pool } = pg;

export const db = new Kysely<DB>({
    dialect: new PostgresDialect({
        pool: new Pool({
            // credentials
        }),
    }),
    plugins: [new CamelCasePlugin()],
    log: ['query'],
});