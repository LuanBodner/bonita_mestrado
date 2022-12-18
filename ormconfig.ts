export const type = 'sqlite';
export const host = 'localhost';
export const port = 5432;
export const username = 'monteiro';
export const password = 'bonita';
export const database = 'bonita';
export const synchronize = true;
export const logging =true;
export const entities = ['src/entity/**/*.ts'];
export const migrations = ['src/migration/**/*.ts'];
export const subscribers = ['src/subscriber/**/*.ts'];
export const cli = {
   entitiesDir: 'src/entity',
   migrationsDir: 'src/migration',
   subscribersDir: 'src/subscriber',
};