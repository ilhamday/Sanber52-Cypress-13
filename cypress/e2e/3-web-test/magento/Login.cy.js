describe('Login',() => {
    it('passes',() =>{
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
        cy.get('#email').type('fendiriawan@gmail.com')
        cy.get('#pass').type('berjalan#12345')

    })
})