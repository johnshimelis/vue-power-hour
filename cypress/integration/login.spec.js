describe('Login', () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080");
    });

    it('TC_003 = check login with valid email and invalid password', () => {
        cy.get('#login_btn').click({force: true});
        cy.get('[data-test="email-login"]').type("dkfdskfjk{enter}");
        cy.get('[data-test="sign-in"]').click();
        cy.get('.error').contains("Password is required");
    })
     it('TC_003 = check login with empty email and empty password', () => {
          cy.get('#login_btn').click({force: true});
          cy.get('[data-test="sign-in"]').click();
           cy.get('.error').contains("Fill the required fields");
     })
      it('TC_003 = check login with empty email and empty password', () => {
          cy.get('#login_btn').click({force: true});
          cy.get('[data-test="sign-in"]').click();
          cy.get('.error').contains("Fill the required fields");
          cy.get('[data-test="email-login"]').type("johnshimelis09@gmail.com{enter}")
          cy.get('[data-test="password-login"]').type("dkfdskfjk{enter}")
     })
})