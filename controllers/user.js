const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const signUp = async(req, res) => {
    let data;
    try {
        console.log(req.body.username)
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
        data = await User.createUser(req.body.username, req.body.email, hashPassword)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json({"error":error})
    }
} 

const user = {
    signUp
}

module.exports = user