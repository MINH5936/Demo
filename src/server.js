const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routers/index');
var cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
require('dotenv').config();
const port = 8080;
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());
app.use(express.text());
mongoose.connect(process.env.MONGODB_URL);
router(app);
require('./configs/viewEngine')(app);



app.listen(port, ()=> {
    console.log('listening on port ' + port);
});