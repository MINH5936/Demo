const UserModel = require('../models/user.model');

const checkAdmin = async( req,res,next) => {
    if(!req.cookies.user){
        return res.redirect("http://localhost:8080/auth/login");
    }

    
    
    // const User = await UserModel.findById(req.cookies.user.user._id);

    // if(!User){
    //     return res.redirect("http://localhost:8080/auth/login");
    // }

    if(req.cookies.user.user.role == "user") {
        return res.redirect("http://localhost:8080");
    }

    next();
};

module.exports = {
    checkAdmin,
}