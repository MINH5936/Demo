const controller = require('../controllers/auth.controller');
const router = require('express').Router();

router.post('/register', controller.registerController);
router.post('/login', controller.loginController);
router.get('/logout', controller.logout);
router.get('/register', controller.getRegister);
router.get('/login', controller.getLogin);

module.exports = router;
