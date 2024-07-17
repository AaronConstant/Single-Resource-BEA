const express = require('express');
const herbs = express.Router();
const { getAllHerbs, getOneHerb } = require('../queries/herbs')

herbs.get('/', async (req, res) => {
    const allHerbs = await getAllHerbs();
    console.log(allHerbs)
    if(allHerbs[0]) {
        res.status(200).json(allHerbs)
    } else {
        res.status(500).json({error: "Server Malfunction"})
    }

})




module.exports = herbs

