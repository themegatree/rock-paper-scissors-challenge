class Player {
    constructor(name) {
        this.name = name;
        this.choice = ""
    };

    userRPS(num) {
        if (num === 0) {this.choice = "Rock"}
        else if (num === 1) {this.choice = "Paper"}
        else {this.choice = "Scissors"};
    };
};

module.exports = Player;