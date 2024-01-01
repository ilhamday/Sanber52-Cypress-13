class editAccount {
    chckboxEmail = '#change-email'
    emailField = '#email'

    inputEmail(email){  // inputan dari user
        cy.clearField(this.emailField)
            .type(email)
    }
}

export default new editAccount()