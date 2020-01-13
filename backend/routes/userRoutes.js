const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' })
})

/*get all userse*/
router.get('/all',(req, res) => {
        User.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
});

module.exports = router