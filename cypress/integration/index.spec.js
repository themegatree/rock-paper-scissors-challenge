describe("Index Tests: ", function() {

    beforeEach(function() {
        cy.visit("/");
    });

    it("PT1: Make sure home page elements are there", function(){
        cy.get("#index-title").should("contain", "Rock, Paper, Scissors!");
        cy.get("#instructions").should("contain", "How to play Rock, Paper, Scissors");   
    }); 

    it("BF8: Input bar",function() {
        cy.get("#p1-input");
    })

});