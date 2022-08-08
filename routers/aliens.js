const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


//API to get the list of aliens
router.get('/', async (req, res) => {

    try {

        const aliens = await Alien.find()
        res.json(aliens)

    } catch (err) {
        res.send("Error " + err)
    }

})

router.get('/:id', async (req, res) => {

    try {

        const alien = await Alien.findById(req.params.id)
        res.json(alien)

    } catch (err) {
        res.send("Error " + err)
    }

})


//API to post the new entry of aliens   
router.post('/', async (req, res) => {


    const alien = new Alien({

        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {

        const data = await alien.save()
        res.json(data)

    } catch (err) {

        res.send("Error " + err)

    }



})


router.patch('/:id',async (req,res) => {

    try{

        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const data = await alien.save()
        res.json(data)

    }catch(err){
        res.send("Error " + err)
    }

})

router.delete('/:id',async (req,res) => {

    try{

        const alien = await Alien.findById(req.params.id)
        const data = await alien.remove()
        res.json(data)

    }catch(err){
        res.send("Error " + err)
    }

})

module.exports = router