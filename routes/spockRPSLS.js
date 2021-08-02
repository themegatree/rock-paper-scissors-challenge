const express = require('express');
const router = express.Router();

const Game = require('../src/game');
const RPSLSobject = require('../src/rpslsObject');

router.post('/', (req, res) => {
    const p1 = req.app.locals.p1;
    p1.userRPS(3);
    game = new Game(p1)
    game.compRPSLS();

    let result = game.compare();
    res.render('result.ejs', {
    result: result,
    playerInput: RPSLSobject(game.player.choice),
    ComputerInput: RPSLSobject(game.compChoice)
    })
})

module.exports = router;