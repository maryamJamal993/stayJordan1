const express = require('express')
const {
    getPlaces,getPlace,createaplace
} = require('../controllers/placeController')


const router = express.Router()

// GET all places
router.get('/', getPlaces)

//GET a single place
router.get('/:id', getPlace)

// POST a new place
router.post('/', createaplace)


module.exports = router