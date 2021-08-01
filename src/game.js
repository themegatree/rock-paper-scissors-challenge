const Player = require("./player.js")

class Game {
    constructor(player) {
        this.player = player;
        this.compChoice = "";
    };

    compRPS() {
        this.compChoice = Math.floor(3 * Math.random());
    }

    compare() {
        let res = (this.player.choice - this.compChoice) % 3;
        if (res < 0) {res+=3};
        if (res === 0) {return "It's a draw!"}
        else if (res === 1) {return "Player wins!"}
        else {return "Player loses!"};
    }
};

module.exports = Game;

// let player = new Player("Shiv")
// player.userRPS(2);
// let game = new Game(player)
// game.compRPS()
// console.log(game.compChoice)
// console.log(game.compare())