describe("Results Tests: ", function() {

    beforeEach(function() {
        cy.visit("/");
        cy.get("#p1-input").type("Shiv");
        cy.get("#enterRPS").click();
        cy.get("#paper").click();
        });

    it("BF9: Make sure buttons are there", function(){
        cy.get("#result");
    }); 
});