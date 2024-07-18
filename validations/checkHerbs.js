const checkBooleans = (req, res, next) => {
    if (typeof req.body.tea === 'boolean') {
        if (typeof req.body.poisonous === 'boolean') {
            next()
        }
    } else {
        res.status(400).json({ error: 'Please enter True or False if it can be a tea and if it is poisonous!' });
    }
};

const checkName = (req,res,next) => {
    if(req.body.name && req.body.name.length >= 4 && /^[^\d]*$/.test(req.body.name)) {
        next()
    } else {
        res.status(400).json({ errror: "Please enter a valid name and no abbreviations!"})
    }

}


module.exports = { checkBooleans, checkName };