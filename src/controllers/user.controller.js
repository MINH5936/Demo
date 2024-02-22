const service = require('../services/user.service');

const updateUser = async (req, res) => {
    try {
        const user = req.cookies.user;
        const User = await service.updateUser(user.user._id,req.body);
        res.clearCookie('user');
        res.cookie(
            'user',
            { user: User.data },
            {
               maxAge: 2 * 60 * 60000,
               httpOnly: true,
               sameSite: 'none',
               secure: true,
            });
        if(User.err){
            return res.status(404).json(User);
        }
        return res.status(200).redirect('http://localhost:8080/user/infoUser');
    } catch (error) {
        return res.status(500).json(error);
    }
   
};

const deleteUser = async (req, res) => {
    try {
        console.log(req.body.userId);
        const User = await service.deleteUser(req.body.userId);
        if(User.err){
            return res.status(404).json(User);
        }
        return res.status(200).json(User);
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const getAllUser = async (req, res) => {
    try {
        const User = await service.getAllUsers();

        res.cookie("user", "123");  
        if(User.err){
            return res.status(404).json(User);
        }
        return res.status(200).json(User);

    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const getOneUser = async (req, res) => {
    try {
        const User = await service.getOneUser(req.query);
        if(User.err){
            return res.status(404).json(User);
        }
        return res.status(200).json(User);
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const formManager = (req, res) => {   
    try {
        const user = req.cookies.user.user;
        return res.render('infoUser', {user: user});
    } catch (error) {
        return res.status(500).json({error: error});
    }
}

module.exports = {
    updateUser,
    deleteUser,
    getAllUser,
    getOneUser,
    formManager,
}