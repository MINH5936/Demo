const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const carRouter = require('./car.router');
const checkAdmin = require('../middlewares/checkAdmin');
const axios = require("axios");


const routes = (app) => {
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
    app.use('/car', carRouter);
    
    app.use('/admin',checkAdmin.checkAdmin,async (req,res) => {
        const cars = await axios.get('http://localhost:8080/car/');
        return res.render('admin', {cars: cars.data.data});
    })

    app.use('/', async (req,res) => {
        const cars = await axios.get('http://localhost:8080/car/');
        return res.render('home',{cars: cars.data.data});
    })

 };
 
 module.exports = routes;