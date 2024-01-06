describe('Registration functionality', () => {
    it('Register new user - Success Registration', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.magentoRegist('Fendi','Riawan','fendiriawan70@gmail.com','berjalan#12345','berjalan#12345')
        cy.get('.message-success').should('contain.text', 'Thank you for registering with Main Website Store')
    })
    it('Register new user - Invalid Email', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.magentoRegist('Fendi','Riawan','fendiriawangmail.com','berjalan#12345','berjalan#12345')
        cy.get('#email_address-error').should('contain.text', 'Please enter a valid email address')
    })
    it('Register new user - Alraedy an acount with this email address', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.magentoRegist('Fendi','Riawan','fendiriawan@gmail.com','berjalan#12345','berjalan#12345')
        cy.get('.message-error').should('contain.text', 'There is already an account with this email address')
    })
    it('Register new user - Incorrectly entered password confirmation', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.magentoRegist('Fendi','Riawan','fendiriawan90@gmail.com','berjalan#12345','berjalan#123')
        cy.get('#password-confirmation-error').should('contain.text', 'Please enter the same value again')
    })
    it('Register new user - Password less than 8 symbols', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.magentoRegist('Fendi','Riawan','fendiriawan90@gmail.com','kata','kata')
        cy.get('#password-error').should('contain.text','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    })
    it('Register new user - Password Strength: Weak', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.magentoRegist('Fendi','Riawan','fendiriawan90@gmail.com','samasama','samasama')
        cy.get('#password-error').should('contain.text','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Register new user - Firstname is Empty', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.get('#firstname')
        cy.get('#lastname').type('Riawan')
        cy.get('#email_address').type('fendiriawan100@gmail.com')
        cy.get('#password').type('berjalan#12345')
        cy.get('#password-confirmation').type('berjalan#12345')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#firstname-error').should('contain.text', 'This is a required field.')
    })
    it('Register new user - Lastname is Empty', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.get('#firstname').type('Fendi')
        cy.get('#lastname')
        cy.get('#email_address').type('fendiriawan100@gmail.com')
        cy.get('#password').type('berjalan#12345')
        cy.get('#password-confirmation').type('berjalan#12345')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('#lastname-error').should('contain.text', 'This is a required field.')

    })
})