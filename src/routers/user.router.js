const userController = require('../controllers/user.controller');
const middleware = require('../middlewares/checkLogin');
const router = require("express").Router();

router.get('/', userController.getAllUser);
router.get('/getOne', userController.getOneUser);
router.get('/infoUser',middleware.checkLogin, userController.formManager);
router.put('/update',userController.updateUser);
router.delete('/delete',userController.deleteUser);

module.exports = router;