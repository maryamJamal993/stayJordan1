const Places = require('../models/place')
const mongoose = require('mongoose')

// get all places
const getPlaces = async (req, res) => {
  
  const places = await Places.find().sort({createdAt: -1})
  res.json(places)
}

// get a single place
const getPlace = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({error: 'No such place'})
  }

  const place = await Places.findById(id)

  if (!place) {
    return res.json({error: 'No such place'})
  }
  
  res.json(place)
}

// create a place doc
const createaplace = async (req, res) => {
    const {photoPath,title, description,ownerEmail,phoneNumber} = req.body
  
    // add doc to db
    try {
      const place = await Places.create({photoPath,title, description,ownerEmail,phoneNumber})
      res.json(place)
    } catch (error) {
      res.json({error: error.message})
    }
  }
  module.exports={
    getPlaces,getPlace,createaplace
  }