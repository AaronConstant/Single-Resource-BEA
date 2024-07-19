const db = require('../db/dbConfig')


const getAllHerbs = async () => {

    try {
        const allHerbs = await db.any("SELECT * FROM herbs")
        return allHerbs;

    } catch(error) {
        
    return error 
    }
}

const getOneHerb = async ( id ) => {

    try {
        const getHerbs = await db.one("SELECT * FROM herbs WHERE id=$1", id)
        return getHerbs

    } catch(error) {

        return error
    }
}

const createHerb = async( herb ) => {
    try {
        const newHerb = await db.one('INSERT INTO herbs (name, entry_date, nutrients, astrology_sign, chakra, element, tea, poisonous, stock) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [   
                herb.name, 
                herb.entry_date,  
                herb.nutrients, 
                herb.astrology_sign, 
                herb.chakra,  
                herb.element, 
                herb.tea, 
                herb.poisonous, 
                herb.stock 
            ])
        return newHerb
    } catch(error) {
        return error
    }

}

const updateHerb = async ( id, herb ) => {
    try {
        const updatingHerb = await db.one(
            "UPDATE herbs SET name=$1, entry_date=$2, nutrients=$3, astrology_sign=$4, chakra=$5, element=$6, tea=$7, poisonous=$8, stock=$9 WHERE id=$10 RETURNING *",
            [
                herb.name,
                herb.entry_date,
                herb.nutrients,
                herb.astrology_sign,
                herb.chakra,
                herb.element,
                herb.tea,
                herb.poisonous,
                herb.stock,
                id
            ]
        );

        return updatingHerb;
    } catch (error) {
        console.error('Error updating herb:', error);
        throw error; 
    }
};

const removeHerb = async ( id ) => {
    try {
        const removedHerb = await db.one("DELETE FROM herbs WHERE id=$1 RETURNING *", id)
        return removedHerb;
    } catch(error) {
        return error
    }

}


module.exports = { getAllHerbs, getOneHerb, createHerb, removeHerb, updateHerb }