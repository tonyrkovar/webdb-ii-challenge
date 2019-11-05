const express = require('express');
const router = express.Router();
const knex = require('../data/dbConfig')

router.post('/', (req, res) => {
    knex
        .insert(req.body, 'id')
        .into('cars')
        .then(added => {
            res.status(200).json(added)
        })
        .catch(err => {
            res.status(400).json({ error: "unable to add to table " })
        })

})

router.get('/', (req, res) => {
    knex
        .select('*')
        .from('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(400).json({ Error: "That table does not exist" })
        })
})


module.exports = router;