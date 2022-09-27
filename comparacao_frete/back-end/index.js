const User = require('./models/usermodel');

//index.js
(async () => {
    const database = require('./db');
    const usermodel = require('./models/usermodel');
 
    try {
        const resultado = await database.sync(
            await User.create({
                user_name: "Vinicius Polo",
                email: "admviniciuspolo@gmail.com",
                password: "123",
                cep: 14406805,
                street_number: 490
            })
        );
        console.log(resultado);
    } catch (error) {add .
        console.log(error);
    }
})();

