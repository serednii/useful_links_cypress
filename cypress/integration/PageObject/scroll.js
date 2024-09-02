describe('Scroll', function () {
    it('scroll to carousel', function () {
        cy.visit('https://unsplash.com/')
        cy.get('[data-test="homepage-header-search-form-input"]').type('Car{enter}')
        // cy.get('h1[class=""]')
        cy.get('h1').should('have.text', 'Car')
        cy.scrollTo(0, 3500)
        cy.get('[data-masonryposition="7"] > .MblTp > :nth-child(1) > .fWieE > .aD8H3 > .Prxeh > .HcSeS > [data-test="photo-grid-masonry-img"]').click()
    })
})