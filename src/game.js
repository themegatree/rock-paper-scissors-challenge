const Player = require("./player.js")

class Game {
    constructor(player) {
        this.player = player;
        this.compChoice = "";
    };

    compRPS() {this.compChoice = Math.floor(3 * Math.random());}

    compRPSLS(){this.compChoice = Math.floor(5 * Math.random())}

    compare() {
        let res = (this.player.choice - this.compChoice) % 5;
        if (res < 0) {res+=5};
        if (res === 0) {return "It's a draw!"}
        else if (res === 1 || res === 3) {return "Player wins!"}
        else if (res === 2 || res === 4) {return "Player loses!"};
    };
};

module.exports = Game;