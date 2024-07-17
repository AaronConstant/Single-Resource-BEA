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


module.exports = { getAllHerbs, getOneHerb }