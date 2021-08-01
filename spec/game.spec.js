const Game = require("../src/game.js");

class mockPlayer{
    constructor(){
        this.name = "Shiv";
        this.choice = 1; //Always paper strat!!!
    };
};

describe("Game Class Component Tests: ", function() {

    beforeEach(function() {
        player = new mockPlayer();
        game = new Game(player);
    });

    it("BF3: Check if player is added to game", function(){
        expect(game.player.name).toEqual("Shiv");
    });

    it("BF4: Game can find User RPS input",function() {
        expect(game.player.choice).toEqual(1);
    });

    xit("BF5a: Can CPU pick Rock", function() {
        spyOn(game,"compRPS").and.callFake(function(){0});
        expect(game.compChoice).toEqual(0);
    });

    xit("BF5b: Can CPU pick Paper",function() {
        spyOn(game,"compRPS").and.callFake(function(){return 1});
        expect(game.compChoice).toEqual(1);
    });

    xit("BF5c: Can CPU pick Scissors",function() {
        spyOn(game,"compRPS").and.callFake(function(){return 2});
        expect(game.compChoice).toEqual(2);
    });

    xit("BF6a: Can the player win",function() {
        spyOn(game,"compRPS").and.callFake(function(){return 0});
        expect(game.compare()).toEqual("Player wins!");
    });

    xit("BF6b: Can the game be drawed",function() {
        spyOn(game,"compRPS").and.callFake(function(){return 1});
        expect(game.compare()).toEqual("It's a draw!");
    });

    xit("BF6c: Can the player lose",function() {
        spyOn(game,"compRPS").and.callFake(function(){return 2});
        expect(game.compare()).toEqual("Player loses!");
    });
});

describe("Test", function() {

    beforeEach(function() {
        player = new mockPlayer();
        // let game;
    });

    it("BF5a: Can CPU pick Rock", function() {
        game = new Game(player);
        spyOn(game,"compRPS").and.callFake(function(){this.compChoice = 0});
        expect(game.compChoice).toEqual(0);
    });

    // it("BF5b: Can CPU pick Paper",function() {
    //     spyOn(game,"compRPS").and.callFake(function(){return 1});
    //     game = new Game(player);
    //     expect(game.compChoice).toEqual(1);
    // });

    // it("BF5c: Can CPU pick Scissors",function() {
    //     spyOn(game,"compRPS").and.callFake(function(){return 2});
    //     game = new Game(player);
    //     expect(game.compChoice).toEqual(2);
    // });
});