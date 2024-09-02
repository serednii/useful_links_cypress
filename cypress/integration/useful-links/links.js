///<reference types="cypress"/>
const email = "userullinks@gmail.com";
const password = "mdcvsww8097";

import verifyAccountElements from './utils/registration_ok';
import verifyLoginUser from './utils/login_user';
Cypress.on('uncaught:exception', () => false);
it('Checking the opening and closing of the registration form and the login form', () => {
    cy.visit('https://serednii.github.io/react-links-type-script');

    cy.viewport(1920, 1080);
    cy.location('protocol').should('eq', 'https:')

    cy.contains('Log in').click({ force: true });
    cy.get('[aria-labelledby$="Log in"]').find('.login-form').should('exist');

    cy.contains('Log in').click({ force: true });
    cy.get('[aria-labelledby$="Log in"]').find('.login-form').should('not.exist');

    cy.contains('Sign in').click({ force: true });
    cy.get('[aria-labelledby$="Sign in"]').find('.login-form').should('exist');

    cy.contains('Sign in').click({ force: true });
    cy.get('[aria-labelledby$="Sign in"]').find('.login-form').should('not.exist');

})

it('user registration', () => {
    cy.visit('https://serednii.github.io/react-links-type-script');

    cy.contains('Sign in').click({ force: true });
    cy.get('.login-form [placeholder="input user name"]').type('useful')
    cy.get('.login-form [placeholder="Input last user name"]').type('links')
    cy.get('.login-form input[type="email"]').type(email)
    cy.get('.login-form input[type="password"]').type(password)
    cy.contains('Registration').click({ multiple: true });

    cy.wait(3000)
    cy.get('body').then(($body) => {
        if ($body.text().includes('VERIFY ACCOUNT BY MAIL!!!')) {
            verifyAccountElements()
        } else {
            cy.contains('Пользователь с таким почтовим адресом').should('exist');
            cy.wait(1500); // 1000 мілісекунд = 1 секунда
            cy.contains('Try Again').click({ force: true });
            verifyLoginUser(email, password)
        }
    });



})
