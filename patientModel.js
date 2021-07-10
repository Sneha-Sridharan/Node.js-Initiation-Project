const Sequelize = require('sequelize');
const sequelize = require('./database');

const patient = sequelize.define('patient_data', {
    name: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    age: {
        type: Sequelize.INTEGER
    },
    gender: {
        type: Sequelize.STRING(10)
    },
    address: {
        type: Sequelize.STRING
    },
    wallet_amount: {
        type: Sequelize.FLOAT
    }
});

module.exports = patient;