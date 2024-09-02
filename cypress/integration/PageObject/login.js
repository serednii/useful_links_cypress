
///<reference types="cypress"/>

class Login {
    constructor(site) {
        this.site = site
        Cypress.on('uncaught:exception', () => false);
    }

    visitSite() {
        return cy.visit(this.site)
    }

    btnLogin() {
        return cy.contains('Log in')
    }

    email() {
        return cy.get('input[type="email"]')
    }

    password() {
        return cy.get('input[type="password"]')
    }


    clickBtnLogin() {
        return cy.get('.IUoDf')
    }
}

export default Login