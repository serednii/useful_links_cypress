
import Login from './PageObject/login.js'

const login = new Login('https://unsplash.com/')

///<reference types="cypress"/>
Cypress.on('uncaught:exception', () => false);
it('should open web site', () => {
    login.visitSite()
    cy.viewport(1920, 1080)
    cy.location('protocol').should('eq', 'https:')
    cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash')
    // cy.get('a[class="wcgxB ogSND ZR5jm cs1e4 oLkUH xMiih ZR5jm GcCli iHTme I3Ayg"]')
    //     .should('be.visible')
    //     .click({ multiple: true })
    login.btnLogin().click({ force: true });
    login.email().type('seredniimykola@gmail.com').should('have.value', 'seredniimykola@gmail.com')
    login.password().type('1234567').should('have.value', '1234567')
    login.clickBtnLogin().should('be.visible').click({ multiple: true })
    // cy.get('.vZMI9')
    //     .should('have.value', 'Invalid email or password.', { timeout: 10000 })

    cy.get('p.vZMI9.N46Vv')
        .should('have.value', 'Invalid email or password.', { timeout: 10000 })


    // cy.contains('Log in').click({ force: true });
    // cy.get('input[type="email"]').type('seredniimm@gmail.com.ua')
    // cy.get('input[type="password"]').type('seredniimm@gmail.com.ua')
    // cy.get('.IUoDf').click({ multiple: true });
})
