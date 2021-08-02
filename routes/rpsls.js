const express = require('express');
const router = express.Router();

const Player = require('../src/player');

router.post('/', (req, res) => {
    const p1 = new Player(req.body.p1InputRPSLS);
    req.app.locals.p1 = p1;

    res.render('rpsls.ejs', {
    p1Name: p1.name
    })
})

module.exports = router;