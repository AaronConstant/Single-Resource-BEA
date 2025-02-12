const express = require('express');
const herbs = express.Router();
const { getAllHerbs, getOneHerb, createHerb, removeHerb, updateHerb } = require('../queries/herbs')

const { checkBooleans, checkName, checkAstrology } = require('../validations/checkHerbs.js')

herbs.get('/', async (req, res) => {
    try {
        const allHerbs = await getAllHerbs();
        if(Array.isArray(allHerbs)) {
            res.status(200).json(allHerbs);
        } else {
            throw new Error('Invalid data format from database');
        }
    } catch (error) {
        console.error('Error in GET /herbs:', error);
        res.status(500).json({ error: "Server Malfunction" });
    }
});

herbs.get('/:id', async (req, res)=> {
    const { id } = req.params;
    const oneHerb = await getOneHerb(id)
    
    if(oneHerb.id) {
        res.status(200).json(oneHerb)
    } else {
        res.status(404).json({error: 'Herb not Found!'})
    }

})

herbs.post('/',checkBooleans, checkName, checkAstrology, async (req, res) => {
    const addHerb = await createHerb(req.body)
    res.json(addHerb)

})

herbs.put('/:id', async (req,res)=> {
    const { id } = req.params;
    const updatingHerb = await updateHerb(id,req.body)

    updatingHerb ? 

    res.status(200).json(updatingHerb) 
    : 
    res.status(404).json({error: "An issue was encountered when updating Herb, Please check all entries and resbumit."})


})

herbs.delete('/:id', async (req,res) =>{
    const { id } = req.params;
    const removingHerb = await removeHerb(id)
    // ternary
    removingHerb.id ?  
    
    res.status(200).json({ message: "Successfully Deleted Herb!!!" }) 
    :  
    res.status(400).json({ error: "An error occurred finding Herb." })

})




module.exports = herbs

