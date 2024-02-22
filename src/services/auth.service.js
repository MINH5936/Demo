const UserModel = require('../models/user.model');
const utils = require('../utils/index');

const register = ({username,password,confirmPassword,...body}) => new Promise(
    async (resolve, reject) => {
        
        const User = await UserModel.findOne({username});
        if(User){
            resolve({
                err: true,
                message: 'User already exists',
                data: null,
             });
             return;
        }
        if(password !== confirmPassword) {
            resolve({
                err: true,
                message: 'Confirm password incorrect',
                data: null,
             });
             return;
        }
        const user = new UserModel({
            username: username,
            password: utils.hansPassword(password),
            ...body
        })
        await user.save();
        resolve({
            err: false,
            data: user? user : null,
            message: user? 'Registered successfully':"Registered failed",
        })
    });

const login = ({username, password,...body}) => 
    new Promise(async (resolve, reject) =>{
       
        const user = await UserModel.findOne({username});
        if(!user){
            resolve({
                err: true,
                message: 'User incorrect',
                data: null,
             });
        } 
        if(!utils.checkPassword(password, user.password)) {
            resolve({
                err: true,
                message: 'password incorrect',
                data: null,
             });
        }
        resolve({
            err: user? false: true,
            data: user? user : null,
            message: user? 'Login successfully': "Login failed",
        })
        
    });

module.exports = {
    register,
    login,
}