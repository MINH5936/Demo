
const UserModel = require('../models/user.model');

const updateUser = (userId,{...body}) => new Promise(async (resolve,reject) =>  {
        try {
            const user = await UserModel.findByIdAndUpdate(userId, body, {new: true} );
            console.log(user);
            resolve({
                err: user? false : true,
                message: user? "Update user successfully" : "User not found",
                data:user? user : null
            })

        } catch (err) {
            reject(err);
        }
});

const deleteUser = (userId) => new Promise(async (resolve,reject) =>  {
    console.log(userId);
    const user = await UserModel.findByIdAndDelete(userId);
    
    resolve({
        err: user? false : true,
        message: user? "Delete user successfully" : "User not found",
        data:user? user : null
    })

});

const getAllUsers = () => new Promise(async (resolve, reject) => {
    const user = await UserModel.find();
    resolve({
        err: user? false : true,
        data:user? user : null
    })
});

const getOneUser = ({...body}) => new Promise(async (resolve,reject) =>  {
    const user = await UserModel.findOne(body);
    
    resolve({
        err: user? false : true,
        message: user? "Get one user successfully" : "User not found",
        data:user? user : null
    })

});

module.exports = {
    updateUser,
    deleteUser,
    getAllUsers,
    getOneUser,
}