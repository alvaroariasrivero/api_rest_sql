const pg = require('pg');
const { Pool } = pg;

let localPoolConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
};

// const poolConfig = process.env.DATABASE_PG_URL
//     ? {
//           connectionString: process.env.DATABASE_PG_URL,
//           ssl: { rejectUnauthorized: false },
//       }
//     : localPoolConfig;

const pool = new Pool(localPoolConfig);

module.exports = pool;

