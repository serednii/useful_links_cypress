function verifyAccountElements() {
    // Перевірка наявності тексту "VERIFY ACCOUNT BY MAIL!!!"
    cy.contains('VERIFY ACCOUNT BY MAIL!!!').should('exist');

    // Перевірка наявності елемента з класом 'auth-user__info'
    cy.get('.auth-user__info').should('exist');

    // Перевірка наявності елемента з класом 'user-panel'
    cy.get('.user-panel').should('exist');

    // Перевірка наявності елемента з класом 'user-exit'
    cy.get('.user-exit').should('exist');
}

// Експорт функції, якщо необхідно використовувати в інших файлах
export default verifyAccountElements;