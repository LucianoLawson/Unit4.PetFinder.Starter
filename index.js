// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    res.json(pets);
});


// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    const owner = req.query.owner;
    const pet = pets.find(pet => pet.owner === owner);
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('Pet not found');
    }
});


// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name;
    const pet = pets.find(pet => pet.name === name);
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('Pet not found');
    }
});


app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;
