// require('dotenv').config();
// const pg = require('pg');
// const { Pool } = pg;

// let localPoolConfig = {
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_DATABASE,
// };

// const pool = new Pool(localPoolConfig);

const pool = require('../utils/posgresqlCon')

const createUser = async(username, email, password, logged=false) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(`INSERT INTO users(username, email, password, logged)
                                        VALUES ($1, $2, $3, $4)`,[username, email, password, logged])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release()
    }
    return result
};

const existUser = async(email) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(`SELECT * FROM users WHERE email = $1 `,[email])
        result = data.rows[0]
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release()
    }
    return result
};

const setLoggedTrue = async(email) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(`UPDATE users
                                        SET logged = true 
                                        WHERE email = $1
                                        RETURNING *; `,[email])
        result = data.rows
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release()
    }
    return result
}

const setLoggedFalse = async(email) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(`UPDATE users
                                        SET logged = false 
                                        WHERE email = $1
                                        RETURNING *; `,[email])
        result = data.rows
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release()
    }
    return result
}

const users = {
    createUser,
    existUser,
    setLoggedTrue,
    setLoggedFalse
};

module.exports = users