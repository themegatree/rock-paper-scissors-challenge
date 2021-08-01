const Player = require("../src/player.js");
const Game = require("../src/game.js");

xdescribe("Jasmine Feature Tests: ", function() {

    beforeEach(function() {
        player = new Player("Shiv");
        game = new Game(player);
        player.userRPS(1);
    });

    it("BF7a: Can I win", function(){
        spyOn(game,"compRPS").and.callFake(function(){return "Rock"});
        expect(game.compare()).toEqual("Player wins!");
    });

    it("BF7b: Can I tie",function() {
        spyOn(game,"compRPS").and.callFake(function(){return "Paper"});
        expect(game.compare()).toEqual("It's a draw!");
    });

    it("BF7c: Can I lose",function() {
        spyOn(game,"compRPS").and.callFake(function(){return "Scissors"});
        expect(game.compare()).toEqual("Player loses!");
    });
});