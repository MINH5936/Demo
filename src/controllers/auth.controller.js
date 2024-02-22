const services = require('../services/auth.service');
const axios = require("axios");

const registerController = async (req, res) => {
    try {
        const user = await services.register(req.body);     
        
        if (user.err) {
           return res.status(401).json(user);
        }
        res.cookie(
         'user',
         { user: user.data },
         {
            maxAge: 2 * 60 * 60000,
            httpOnly: true,
            sameSite: 'none',
            secure: true,
         }
      );
  
        return res.status(200).redirect('/auth/login');
     } catch (error) {
         
        return res.status(500).json(error);
     }
   
};

const loginController = async (req, res) => {
    try {
        const user = await services.login(req.body);
        
        if (user.err) {
           return res.status(401).json(user);
        }


         res.cookie(
         'user',
         { user: user.data}
         );
        if(user.data.role) {
           return res.status(200).redirect("http://localhost:8080/admin");
        }
        return res.status(200).redirect("http://localhost:8080");

     } catch (error) {
         
        return res.status(500).json(error);
     }

};

const logout = (req, res) => {
   try {
      res.clearCookie('user');
      res.status(200).redirect("http://localhost:8080");
   } catch (error) {
      return res.status(500).json(error);
   }
};

const getLogin = (req, res) => {
   return res.render('login');
}

const getRegister = (req, res) => { 
   return res.render('register');
}

const getAdmin = async (req, res) => {
   return res.render('admin');
}


module.exports = {
    registerController,
    loginController,
    getLogin,
    getRegister,
    getAdmin,
    logout,
}