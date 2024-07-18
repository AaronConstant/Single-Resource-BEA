const db = require('../db/dbConfig')

//
const getAllHerbs = async () => {

    try {
        const allHerbs = await db.any("SELECT * FROM herbs")
        return allHerbs;

    } catch(error) {
        
    return error 
    }
}
//
const getOneHerb = async (id) => {

    try {
        const getHerbs = await db.one("SELECT * FROM herbs WHERE id=$1", id)
        return getHerbs

    } catch(error) {

        return error
    }
}

const createHerb = async(herb) => {
    try {
        const newHerb = await db.one('INSERT INTO herbs (name, nutrients, astrology_sign, chakra, element, tea, poisonous) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',[ herb.name,  herb.nutrients, herb.astrology_sign, herb.chakra,  herb.element, herb.tea, herb.poisonous ])
        return newHerb
    } catch(error) {
        return error
    }

}


module.exports = { getAllHerbs, getOneHerb, createHerb }