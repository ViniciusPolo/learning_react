const Sequelize = require('sequelize');
const database = require('../db');

const User = database.define('user', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    street_number: Sequelize.INTEGER,

})

module.exports = User;