describe("Feature Tests: ", function() {

    beforeEach(function() {
        cy.visit("/");
        cy.get("#p1-input").type("Shiv");
    });

    it("FT1: Enter Name", function(){
        cy.get("#index-title").should("contain", "Rock Paper Scissors!");
        cy.get("#instructions").should("contain", "To use this app input your name");   
    }); 

    it("FT2: Can play game", function(){
        cy.get("#startRPS").click();
        cy.get("#paper").click();
        cy.get("#result");
    })

});