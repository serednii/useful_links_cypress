
///<reference types="cypress"/>
Cypress.on('uncaught:exception', () => false);

describe('Rozetka', () => {

    it('should open web site', () => {

        cy.visit('https://www.rozetka.com.ua/', { failOnStatusCode: false });
        cy.viewport(1920, 1080);

        // // Переконайтеся, що кнопка для входу існує і натискається
        // // Якщо кнопка входу має інший текст або інші властивості, змініть відповідно
        // cy.contains('Увійти').click({ force: true });

        // // Пошук продукту
        // cy.get('input[type="text"]').type('iphone 12');
        // cy.contains('Знайти').click();
    });

});

