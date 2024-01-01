describe('Edit Account Information', () => {
    beforeEach(() => {
        cy.visit('http://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type('ilham@mail.com')
        cy.get('#pass').type('12345678A@')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        // menunggu dropdown bisa di klik
        cy.wait(1000)
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    })

    it('Change First and Last Name', () => {
        cy.get('#firstname')
            .clear()    // menghapus text yang ada di field
            .type('Ilham-edit') // menuliskan text di field
        cy.get('#lastname')
            .clear()
            .type('Ferry-edit')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get(':nth-child(2) > .greet > .logged-in', { timeout: 3000}).should('contain.text', 'Welcome, Ilham-edit Ferry-edit!')
    })

    it('Change Name, Empty First Name', () => {
        cy.get('#firstname')
            .clear()    // menghapus text yang ada di field
        cy.get('#lastname')
            .clear()
            .type('Ferry-edit')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#firstname-error').should('be.visible')
    })

    it.only('Change Name, Empty Last Name', () => {
        cy.get('#firstname')
            .clear()    // menghapus text yang ada di field
            .type('Ilham-edit') // menuliskan text di field
        cy.get('#lastname')
            .clear()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#lastname-error').should('be.visible')
    })
})

