const swag = require('../models/swag');

module.exports = (req, res, next)=> {
    if(!req.query.category){
        res.status(200).send(swag);
    } else{
        var filtered = swag.filter((curr)=> {
            return curr.category === req.query.category;
        })
        res.status(200).send(filtered);
    }
}