const service = require('../services/car.service');

const createCar = async (req, res) => {
    try {
        const car = await service.createCar(req.body);
        console.log(req.body);
        if(car.err){
            return res.status(404).json(car);
        }
        return res.status(200).redirect(`http://localhost:8080/admin`);
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const updateCar = async (req, res) => {
    try {
        const car = await service.updateCar(req.params.idCar,req.body);
        if(car.err){
            return res.status(404).json(car);
        }
        return res.status(200).redirect(`http://localhost:8080/admin`);
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const deleteCar = async (req, res) => {
    try {
        const car = await service.deleteCar(req.params.idCar);
        if(car.err){
            return res.status(404).json(car);
        }
        return res.status(200).redirect(`http://localhost:8080/admin`);
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const getAllCar = async (req, res) => {
    try {
        const car = await service.getAllCars();
        if(car.err){
            return res.status(404).json(car);
        }
        return res.status(200).json(car);
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const getOneCar = async (req, res) => {
    try {
        const car = await service.getOneCar(req.query);
        if(car.err){
            return res.status(404).json(car);
        }
        return res.status(200).json(car);
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const getCreateCar = async (req, res) => {
    try {
        // const car = await service.getOneCar(req.query);
        // if(car.err){
        //     return res.status(404).json(car);
        // }
        return res.status(200).render('createCar');
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const getEditCar = async (req, res) => {
    try {
        const car = await service.getOneCar(req.params.idCar);
        if(car.err){
            return res.status(404).json(car);
        }
        
        return res.status(200).render("editCar",{car: car.data});
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const getDetailCar = async (req, res) => {
    try {
        const car = await service.getOneCar(req.params.idCar);
        if(car.err){
            return res.status(404).json(car);
        }
        
        return res.status(200).render("detail",{car: car.data});
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

const search = async (req, res) => {
    try {
        const car = await service.search(req.body);
        if(car.err){
            return res.status(404).json(car);
        }
        
        return res.status(200).render("home",{cars: car.data});
    } catch (error) {
        return res.status(500).json({error: error});
    }
};

module.exports = {
    createCar,
    updateCar,
    deleteCar,
    getAllCar,
    getOneCar,
    getCreateCar,
    getEditCar,
    getDetailCar,
    search,
}