//import editAccountPage from "../../../support/pageObject/magento/edit-account.page"

describe('Edit Address', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/')
  })
  
  it('Login My Account Billing', () => {
    //cy.visit('https://magento.softwaretestingboard.com/customer/account/')
    cy.get('#email').type('wahidahizadh@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Wahidah28*')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()

    cy.get('.box-billing-address > .box-actions > .action > span').click()
  })

  it('Edit Contact Information', () =>{
    //cy.get('#firstname').
  })


})