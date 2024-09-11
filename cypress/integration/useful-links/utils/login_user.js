function verifyLoginUser(email, password) {
    cy.contains('Log in').click({ force: true });
    cy.get('.login-form input[type="email"]').type(email);
    cy.get('.login-form input[type="password"]').type(password);
    cy.contains('Login').click({ force: true });
    cy.get('.user-panel').click({ force: true });
    cy.contains('userullinks').then((el) => {
        console.log(el)
    })
    // cy.contains(email, { timeout: 3000 }).parent('tr').within(() => {
    //     cy.get('td').eq(1).find('button').click();
    // });
    //cy.get("input").contains("useful", { timeout: 3000 }).should('exist')
    // cy.get("input").then(($div) => {
    //     $div.each((_, el) => {
    //         console.log(el)
    //     })
    // })
    // // Знаходимо td з email, потім знаходимо батьківський tr
    // const tr = $(`td:contains(${email})`).closest('tr');

    // // Знаходимо другу комірку td в цьому рядку і робимо клік по кнопці всередині неї
    // cy.get(tr.find('td:nth-child(2) button')).click({ force: true });

}

export default verifyLoginUser;