const Player = require("../src/player.js");

describe("Player Class Component Tests: ", function() {

    beforeEach(function() {
        player = new Player("Shiv");
    });

    it("#BF1: Can input name", function(){
        expect(player.name).toEqual("Shiv")
    });

    it("#BF2a: Can input Rock", function(){
        player.userRPS(0);
        expect(player.choice).toEqual(0)
    });

    it("#BF2b: Can input Paper", function(){
        player.userRPS(1);
        expect(player.choice).toEqual(1)
    });

    it("#BF2c: Can input Scissors", function(){
        player.userRPS(2);
        expect(player.choice).toEqual(2)
    });
});