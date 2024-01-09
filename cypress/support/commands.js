// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('magentoRegist', (firstname, lastname, email, password, confirmpassword) => {
    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(confirmpassword)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
})

// Custom command by Ilham
Cypress.Commands.add('clearField', (locator) => {
    cy.get(locator)
        .clear()
})

Cypress.Commands.add('checkLocator', (locator, value) => {
    cy.get(locator).should(value)
})

//Command Edit Address
Cypress.Commands.add('inputText', (locator,value) => {
    cy.get(locator)
    .should('be.visible')
    .clear()
    .type(value)
})