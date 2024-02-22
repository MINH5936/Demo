const carController = require('../controllers/car.controller');
const router = require("express").Router();

router.get('/', carController.getAllCar);
router.get('/getOne', carController.getOneCar);
router.get('/create', carController.getCreateCar);
router.get('/update/:idCar', carController.getEditCar);
router.get('/detail/:idCar', carController.getDetailCar);
router.post('/create', carController.createCar);
router.post('/search', carController.search)
router.put('/update/:idCar',carController.updateCar);
router.delete('/delete/:idCar',carController.deleteCar);

module.exports = router;