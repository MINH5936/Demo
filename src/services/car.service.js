const carModel = require('../models/car.model');

const createCar = ({...body}) => new Promise(async (resolve, reject) => {
    const data = await carModel.findOne({nameCar: body.nameCar})
    if(data) {
        resolve({
            err:  true,
            message:  "Car already exists",
            data: null
        })
        return;
    }
    const car =  new carModel(body);
    await car.save();
    resolve({
        err: car? false : true,
        message: car? "Create car successfully" : "Create car failed",
        data:car? car : null
    })
}); 

const updateCar = (carId,{...body}) => new Promise(async (resolve,reject) =>  {
    const car = await carModel.findByIdAndUpdate(carId, body);
    
    resolve({
        err: car? false : true,
        message: car? "Update car successfully" : "car not found",
        data:car? car : null
    })

});

const deleteCar = (carId) => new Promise(async (resolve,reject) =>  {
    const car = await carModel.findByIdAndDelete(carId);

    resolve({
        err: car? false : true,
        message: car? "Delete car successfully" : "car not found",
        data:car? car : null
    })

});

const getAllCars = () => new Promise(async (resolve, reject) => {
    const car = await carModel.find();
    resolve({
        err: car? false : true,
        data:car? car : null
    })
});

const getOneCar = (carId) => new Promise(async (resolve,reject) =>  {
    const car = await carModel.findById(carId);

    resolve({
        err: car? false : true,
        message: car? "Get one car successfully" : "car not found",
        data:car? car : null
    })

});

const search = ({...body}) => new Promise(async (resolve,reject) =>  {
    const car = await carModel.find({nameCar: { $regex: body.nameCar, $options: 'i' }});

    resolve({        
        data:car? car : []
    })

});

module.exports = {
    createCar,
    updateCar,
    deleteCar,
    getAllCars,
    getOneCar,
    search,
}