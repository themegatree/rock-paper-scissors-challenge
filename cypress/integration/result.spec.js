describe("Results Tests: ", function() {

    beforeEach(function() {
        cy.visit("/");
        cy.get("#p1-input").type("Shiv");
        cy.get("#startRPS").click();
        cy.get("#paper").click();
        });

    it("BF10: Make sure result is visable", function(){
        cy.get("#result");
    }); 

    it("PT2: Reset Button", function() {
        cy.get("#reset").should("contain", "Reset");
    });
    
});