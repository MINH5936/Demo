const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: 'string',
        required: true,
    },
    username: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    avatar: {
        type: 'string',
        default: ""
    },
    role: {
        type: 'string',
        default: 'user',
        enum: ['admin', 'user']
    },
    phone: {
        type: 'string',
        default:"",
    },
    address: {
        type: 'string',
        default:"",
    }

});

const User = model('User', userSchema);

module.exports = User;