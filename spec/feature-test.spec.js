const Player = require("../src/player.js");
const Game = require("../src/game.js");

describe("Jasmine Feature Tests: ", function() {

    beforeEach(function() {
        player = new Player("Shiv");
        game = new Game(player);
        player.userRPS(1);
    });

    it("BF7a: Can I win", function(){
        spyOn(game,"compRPS").and.callFake(() => {game.compChoice = 0});
        game.compRPS();
        expect(game.compare()).toEqual("Player wins!");
    });

    it("BF7b: Can I tie",function() {
        spyOn(game,"compRPS").and.callFake(() => {game.compChoice = 1});
        game.compRPS();
        expect(game.compare()).toEqual("It's a draw!");
    });

    it("BF7c: Can I lose",function() {
        spyOn(game,"compRPS").and.callFake(() => {game.compChoice = 2});
        game.compRPS();
        expect(game.compare()).toEqual("Player loses!");
    });

    it("EC1a: Can I win RPSLS",function() {
        spyOn(game,"compRPS").and.callFake(() => {game.compChoice = 3});
        game.compRPS();
        expect(game.compare()).toEqual("Player wins!");
    });

    it("EC1b: Can I lose RPSLS",function() {
        spyOn(game,"compRPS").and.callFake(() => {game.compChoice = 4});
        game.compRPS();
        expect(game.compare()).toEqual("Player loses!");
    });

});