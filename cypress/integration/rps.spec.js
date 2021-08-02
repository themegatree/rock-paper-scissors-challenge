describe("RPS Tests: ", function() {

    beforeEach(function() {
        cy.visit("/");
        cy.get("#p1-input").type("Shiv");
        cy.get("#startRPS").click();
    });

    it("BF9: Make sure buttons are there", function(){
        cy.get("#rps-intro").should("contain", "Hello Shiv!")
        cy.get("#rock").should("contain", "Rock");
        cy.get("#paper").should("contain", "Paper");
        cy.get("#scissors").should("contain", "Scissors");
    }); 
});