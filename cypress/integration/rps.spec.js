describe("RPS Tests: ", function() {

    beforeEach(function() {
        cy.visit("/");
        cy.get("#p1-input").type("Shiv");
        cy.get("#enterRPS").click();
    });

    it("BF9: Make sure buttons are there", function(){
        cy.get("#rock").should("contain", "rock");
        cy.get("#paper").should("contain", "paper");
        cy.get("#scissors").should("contain", "scissors");
    }); 
});