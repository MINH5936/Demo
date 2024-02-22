const bcryptjs = require('bcryptjs');

const hansPassword = (password) => {
    return bcryptjs.hashSync(password,bcryptjs.genSaltSync(10));
} 

const checkPassword = (password,input) =>{ 
    return bcryptjs.compareSync(password,input);
}

module.exports = {
    hansPassword,
    checkPassword,
}