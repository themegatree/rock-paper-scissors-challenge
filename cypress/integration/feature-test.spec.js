describe("Feature Tests: ", function() {

    beforeEach(function() {
        cy.visit("/");
        cy.get("#p1-input").type("Shiv");
    });

    it("FT1: Enter Name", function(){
        cy.get("#index-title").should("contain", "Rock, Paper, Scissors!");
        cy.get("#instructions").should("contain", "How to play Rock, Paper, Scissors");   
    }); 

    it("FT2: Can play game", function(){
        cy.get("")
        cy.get("#enterRPS").click();
        cy.get("#paper").click();
        cy.get("#result");
    })

});