describe("Index Tests: ", function() {

    beforeEach(function() {
        cy.visit("/");
    });

    it("PT1: Make sure home page elements are there", function(){
        cy.get("#index-title").should("contain", "Rock Paper Scissors!");
        cy.get("#instructions").should("contain", "To use this app input your name");
        cy.get("#startRPS").should("contain", "RPS")   
    }); 

    it("BF8: Input bar",function() {
        cy.get("#p1-input");
    })

    it("EX1i: RPSLS option", function(){
        cy.get("#instrunctions-RPSLS").should("contain", "Why not try Rock Paper Scissors Lizard Spoke!");
        cy.get("#startRPSLS").should("contain", "RPSLS")
    })


});