describe('Registration functionality', () => {
    it('Register new user - Success Registration', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.get('#firstname').type('Fendi')
        cy.get('#lastname').type('Riawan')
        cy.get('#email_address').type('fendiriawan7@gmail.com')
        cy.get('#password').type('berjalan#12345')
        cy.get('#password-confirmation').type('berjalan#12345')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-success').should('contain.text', 'Thank you for registering with Main Website Store')
    })
    it('Register new user - Invalid Email', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.get('#firstname').type('Fendi')
        cy.get('#lastname').type('Riawan')
        cy.get('#email_address').type('fendiriawangmail.com')
        cy.get('#password').type('berjalan#12345')
        cy.get('#password-confirmation').type('berjalan#12345')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#email_address-error').should('contain.text', 'Please enter a valid email address')
    })
    it('Register new user - Alraedy an acount with this email address', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.get('#firstname').type('Fendi')
        cy.get('#lastname').type('Riawan')
        cy.get('#email_address').type('fendiriawan@gmail.com')
        cy.get('#password').type('berjalan#12345')
        cy.get('#password-confirmation').type('berjalan#12345')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-error').should('contain.text', 'There is already an account with this email address')
    })
})