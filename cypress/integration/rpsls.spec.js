describe("RPSLS Tests: ", function() {

    beforeEach(function() {
        cy.visit("/");
        cy.get("#p1-input-rpsls").type("Shiv");
        cy.get("#startRPSLS").click();
    });

    it("BF9: Make sure buttons are there", function(){
        cy.get("#rpsls-intro").should("contain", "Hello Shiv!")
        cy.get("#rock").should("contain", "Rock");
        cy.get("#paper").should("contain", "Paper");
        cy.get("#scissors").should("contain", "Scissors");
        cy.get("#lizard").should("contain", "Lizard");
        cy.get("#spock").should("contain", "Spock");
    }); 
});