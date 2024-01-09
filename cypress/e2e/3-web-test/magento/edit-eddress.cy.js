describe('Edit Address', () => {
  //beforeEach(() => {
    //cy.visit('https://magento.softwaretestingboard.com/customer/account/')
  //})
  
  it('Login My Account Billing', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/')
    cy.get('#email').type('wahidahizadh@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Wahidah28*')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    
    //edit address account billing
    cy.get('.box-billing-address > .box-actions > .action > span').click()
  })

  it('Edit Contact Information', () =>{
    
    cy.get('#firstname').type('Wahidah Izmi')
    cy.get('#lastname').type('Addinah')
    cy.get('#telephone').type('082276956300')
  })

  it('Edit Addres', () =>{
    
    cy.get('#street_1').type('Pematang Siantar')
    cy.get('#city').type('Medan')
    cy.get('#region_id').click()
  })


})