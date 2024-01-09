// Import Cypress custom command if defined
// import './commands';

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
  });

  it('Login Berhasil', () => {
    cy.get('#email').type('fendiriawan@gmail.com');
    cy.get('#pass').type('berjalan#12345');
    cy.get('#send2').click();
  });

  it('Login Gagal - Kredensial Salah', () => {
    cy.get('#email').type('user@invalid.com');
    cy.get('#pass').type('password123');
    cy.get('#send2').click();
    cy.get('.message-error').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later');
  });

  it('Login Gagal - Email Kosong', () => {
    cy.get('#pass').type('berjalan#12345');
    cy.get('#send2').click();
    cy.get('.message-error').should('contain.text', 'A login and a password are required.');
  });

  it('Login Gagal - Password Kosong', () => {
    cy.get('#email').type('fendiriawan@gmail.com');
    cy.get('#send2').click();
    cy.get('.message-error').should('contain.text', 'A login and a password are required.');
  });

  // Tambahkan skenario pengujian negatif lainnya jika diperlukan
});
