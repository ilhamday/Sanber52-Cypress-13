<<<<<<< HEAD
=======
describe('Edit Address', () => {
  //beforeEach(() => {
    //cy.visit('https://magento.softwaretestingboard.com/customer/account/')
  //})
  
  it('Edit Address', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/')
    cy.get('#email').type('wahidahizadh@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Wahidah28*')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    
    //edit billing address
    cy.get('.box-billing-address > .box-actions > .action > span').click()
    cy.inputText('#firstname','Wahidah Izmi')
    cy.inputText('#lastname','Addinah')
    cy.inputText('#telephone','082276956300')

    cy.inputText('#street_1','Pematang Siantar')
    cy.inputText('#city','Medan')
    cy.get('#country').select('Indonesia')
    cy.inputText('#zip','21136')
    cy.inputText('#region','Sumatera Utara')

    //button save
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

    //edit shipping address
    cy.get('.box-address-shipping > .box-actions > .action > span').click()
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()

  })

})

>>>>>>> branchwahidah


