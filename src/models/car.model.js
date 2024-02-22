const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    nameCar: {
        type: 'string',
        required: true,
    },
    theFirm: {
        type: 'string',
    },
    imageCar: {
        type: 'string',
    },
    quantity: {
        type: 'number',
    },
    price: {
        type: 'number',
    },
    description: {
        type: 'string',
    }
});

const carModel = model('Car', carSchema);

module.exports = carModel;