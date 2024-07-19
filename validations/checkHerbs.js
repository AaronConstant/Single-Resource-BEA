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
        res.status(400).json({ error: "Please enter a valid name with no abbreviations!"})
    }

}

const checkAstrology = (req,res,next) => {
    const astrologySigns = [
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "capricorn",
        "aquarius",
        "pisces"
    ];

    const input = req.body.astrology_sign;

    if (typeof input !== 'string' || !input.trim()) {
        return res.status(400).json({ error: "Please enter a valid astrology sign or signs!" });
    }

    const userSigns = input.split(',').map(sign => sign.trim().toLowerCase());

    const allValid = userSigns.every(sign => astrologySigns.includes(sign));

    if (allValid) {
        next();
    } else {
        res.status(400).json({ error: "Please enter valid astrology signs!" });
    }
};




module.exports = { checkBooleans, checkName, checkAstrology };