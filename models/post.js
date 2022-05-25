const pool = require('../utils/posgresqlCon');

const createPost = async(post) => {
    const {title, content, email} = post
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(`INSERT INTO posts(title,content,id_author)
                                        VALUES ($1,$2,
                                        (SELECT id_user FROM users WHERE email=$3))`
                                        ,[title,content,email])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release()
    }
    return result
};

const getPostsByEmail = async (email) => {
    let client,result;
    try{
        client = await pool.connect();
        const data = await client.query(`
                SELECT p.title,p.content,p.date,u.username
                FROM posts AS p
                INNER JOIN users AS u
                ON p.id_user=u.id_user
                WHERE u.email=$1
                ORDER BY p.title;`,[email])
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
};

const getAllPosts = async () => {
    let client,result;
    try{
        client = await pool.connect();
        const data = await client.query(`SELECT * FROM posts;`)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

const posts = {
    createPost,
    getPostsByEmail,
    getAllPosts
}

module.exports = posts