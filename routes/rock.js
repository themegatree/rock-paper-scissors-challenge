const express = require('express');
const router = express.Router();

const Game = require('../src/game');

router.post('/', (req, res) => {
    const p1 = req.app.locals.p1;
    p1.userRPS(0);
    game = new Game(p1)
    game.compRPS();
    let result = game.compare();
    res.render('result.ejs', {
    result: result
    })
})

module.exports = router;