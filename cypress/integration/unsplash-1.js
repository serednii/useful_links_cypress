///<reference types="cypress"/>
Cypress.on('uncaught:exception', () => false);
it('should open web site', () => {
    cy.visit('https://unsplash.com/');
    cy.contains('Log in').click({ force: true });
    cy.get('input[type="email"]').type('seredniimm@gmail.com.ua')
    cy.get('input[type="password"]').type('seredniimm@gmail.com.ua')
    cy.get('.IUoDf').click({ multiple: true });
})
