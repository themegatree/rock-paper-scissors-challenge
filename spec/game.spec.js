const Game = require("../src/game.js");

class mockPlayer{
    constructor(){
        this.name = "Shiv";
        this.choice = "Paper"; //Always paper strat!!!
    };
};

xdescribe("Game Class Component Tests: ", function() {

    beforeEach(function() {
        player = new mockPlayer();
        game = new Game(player);
    });

    it("BF3: Check if player is added to game", function(){
        expect(game.player.name).toEqual("Shiv");
    });

    it("BF4: Game can find User RPS input",function() {
        expect(game.player.choice).toEqual("Paper");
    });

    it("BF5b: Can CPU pick Paper",function() {
        spyOn(game,"compRPS").and.callFake(function(){return "Paper"});
        expect(game.compChoice).toEqual("Paper");
    });

    it("BF5c: Can CPU pick Scissors",function() {
        spyOn(game,"compRPS").and.callFake(function(){return "Scissors"});
        expect(game.compChoice).toEqual("Scissors");
    });

    it("BF6a: Can the player win",function() {
        spyOn(game,"compRPS").and.callFake(function(){return "Rock"});
        expect(game.compare()).toEqual("Player wins!");
    });

    it("BF6b: Can the game be drawed",function() {
        spyOn(game,"compRPS").and.callFake(function(){return "Paper"});
        expect(game.compare()).toEqual("It's a draw!");
    });

    it("BF6c: Can the player lose",function() {
        spyOn(game,"compRPS").and.callFake(function(){return "Scissors"});
        expect(game.compare()).toEqual("Player loses!");
    });
});