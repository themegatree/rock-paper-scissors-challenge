class Player {
    constructor(name) {
        this.name = name;
        this.choice = ""
    };

    userRPS(num) {this.choice = num};
}

module.exports = Player;