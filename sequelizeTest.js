const Sequelize = require('sequelize');
const express = require('express');
const patient = require('./patientModel');
const sequelize = require('./database');

const app = express();

app.get('/', (req, res) => {
    res.send('Hey Everyone!!');
});

app.use(express.json());

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))

app.get('/add', (req, res) => {
    patient.create({
        name: 'Aparna',
        age: 44,
        gender: 'Female',
        address: 'sjdkjkdwdx aslkwjdkjk caslmcasc sljldkl DAdkljaldj ckajd',
        wallet_amount: '25000'
    })
    .then(() => console.log("Created User Successfully"))
    .catch(err => console.log(err))
    res.send('Created User Successfully');
});

app.get('/patients', (req, res) => {
    patient.findAll()
    .then(patients => {
        console.log(patients);
        res.json(patients);
    })
    .catch(err => console.log(err))
});

app.listen(3000, () => console.log('Listening on port 3000'));