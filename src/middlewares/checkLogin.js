const UserModel = require('../models/user.model');

const checkLogin = async( req,res,next) => {
    if(!req.cookies.user){
        return res.redirect("/auth/login");
    }

    
    
    const User = await UserModel.findById(req.cookies.user.user._id);

    if(!User){
        return res.redirect("/auth/login");
    }

    next();
};

module.exports = {
    checkLogin,
}
