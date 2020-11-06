// require express, passport,
const express = require('express')
const passport = require('passport')

// pull in Mongoose Model for listings
const Listing = require('../models/listing')

// use this function to detect when we need to throw a custom error
const customErrors = require('../../lib/custom_errors')

// use function to handle 404 when non-existant document is requested
const handle404 = customErrors.handle404

// send out 401 message when someone attempts to change a resource that is not theirs
const requireOwnership = customErrors.requireOwnership

// middleware to remove blank fields from req.body
const removeBlanks = require('../../lib/remove_blank_fields')

// token requirement
const requireToken = passport.authenticate('bearer', { session: false })

// start router
const router = express.Router()

// CREATE
router.post('/listings', requireToken, (req, res, next) => {
  req.body.listing.owner = req.user.id

  Listing.create(req.body.listing)
  // success - status 201
    .then(listing => {
      res.status(201).json({ listing: listing.toObject() })
    })
  // if error
    .catch(next)
})

// INDEX - get listings
router.get('/listings', requireToken, (req, res, next) => {
  Listing.find()
  // convert each one to a POJO to mapp and apply .toObject to each
    .then(listings => {
      return listings.map(listing => listing.toObject())
    })
    .then(listings => res.status(200).json({ listings: listings }))
    // if error
    .catch(next)
})

// SHOW - get listing
router.get('/listings/:id', requireToken, (req, res, next) => {
  // req.params.ide will be set based on the :id in the route
  Listing.findById(req.params.id)
    .then(handle404)
    // success ->status 200
    .then(listing => res.status(200).json({ listing: listing.toObject() }))
    // if error
    .catch(next)
})

// UPDATE - PATCH TOKEN
router.patch('/listings/:id', requireToken, removeBlanks, (req, res, next) => {
  // block attempts to change ownership
  delete req.body.listing.owner

  Listing.findById(req.params.id)
    .then(handle404)
    .then(listing => {
      // throw an error if attmpt to update when not the owner
      requireOwnership(req, listing)

      // pass the result
      return listing.updateOne(req.body.listing)
    })
    // success -> status 204
    .then(() => res.sendStatus(204))
    // if error
    .catch(next)
})

// DESTROY -> delete
router.delete('/listings/:id', requireToken, (req, res, next) => {
  Listing.findById(req.params.id)
    .then(handle404)
    .then(listing => {
    // throw an error if attmpt to update when not the owner
      requireOwnership(req, listing)
      // delete only 1
      listing.deleteOne()
    })
  // success -> status 204
    .then(() => res.sendStatus(204))
  // if error
    .catch(next)
})

module.exports = router
