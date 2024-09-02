

const url = 'http://temperatura.smm.zzz.com.ua/'
const userName = 'seredniimykola@gmail.com'
const password = '1234567'

//<reference types="cypress"/>
Cypress.on('uncaught:exception', () => false);
it('should make a GET request and verify the response', () => {
    cy.request(url) // Змініть URL на ваш реальний
        .then((response) => {
            expect(response.status).to.eq(200); // Перевіряємо статус код
            expect(response.body).to.have.property('data'); // Перевіряємо наявність властивості "data" у тілі відповіді
        });
});
// it('should open web site', () => {
//     cy.visit(url)
//     cy.window().then((win) => {
//         cy.stub(win, 'alert').as('alertStub');
//     });
//     cy.location('protocol').should('eq', 'http:')
//     cy.get('#username').type('seredniimykola@gmail.com').should('have.value', userName)
//     cy.get('#password').type('1234567').should('have.value', password)
//     cy.get('.registrationForm button').click({ force: true });
//     cy.get('@alertStub').should('be.calledWith', 'Expected alert message');
//     // cy.wait('@register').then((interception) => {
//     //     // Перевіряємо статус коду
//     //     expect(interception.response.statusCode).to.eq(200);
//     //     // Читаємо та перевіряємо відповідь
//     //     const responseBody = interception.response.body;
//     //     console.log(responseBody); // Виводимо відповідь в консоль
//     //     // Додаткові перевірки
//     //     expect(responseBody.message).to.eq('Регистрация успешна!'); // Змініть на реальну відповідь сервера
//     // });

// })
