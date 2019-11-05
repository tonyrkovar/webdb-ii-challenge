const express = require('express');

const carRouter = require('./enpoints/carRouter')

const server = express();

server.get('/', (req, res) => {
    res.status(200).json("Your server is running on port 7000")
})

server.use(express.json());
server.use('/api/cars', carRouter)

module.exports = server;