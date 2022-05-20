const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt_secret = process.env.ULTRA_SECRET_KEY;

const signUp = async(req, res) => {
    let data;
    try {
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
        data = await User.createUser(req.body.username, req.body.email, hashPassword);
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json({"error":error})
    }
};

const loginUser = async(req, res) => {
    let data;
    try {
        const {email, password} = req.body
        data = await User.existUser(email);
        if(!data){
            res.status(400).json({ msg: 'Incorrect user or password'}); 
        }else{
            const match = await bcrypt.compare(password, data.password);
            if(match){
                await User.setLoggedTrue(req.body.email)
                const {email, username} = data;
                const userForToken = {
                    email: email,
                    username: username,
                };
                const token = jwt.sign(userForToken, jwt_secret, {expiresIn: '20m'});
                res
                .status(200)
                .json({
                    msg:'Correct authentication',
                    token: token});
            }else {
                res.status(400).json({ msg: 'Incorrect user or password'});
            }
        }        
    } catch (error) {
        console.log('Error:', error);
    }
};

const logout = async(req, res) => {
    let data;
    try {
        data = await User.setLoggedFalse(req.params.email)
        res.status(200).json({message: 'Token deleted'});
    } catch (error) {
        console.log('Error:', error);
    }
};

const user = {
    signUp,
    loginUser,
    logout
}

module.exports = user