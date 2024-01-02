// Import Cypress custom command if defined
// import './commands';

describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
    });
  
    it('Login Berhasil', () => {
      cy.get('#email').type('fendiriawan@gmail.com');
      cy.get('#pass').type('berjalan#12345');
      cy.get('button[title="Login"]').click(); // Asumsi tombol login, sesuaikan jika diperlukan
      cy.url().should('include', '/customer/account/'); // Asumsi setelah login sukses, akan diarahkan ke halaman akun pelanggan
    });
  
    it('Login Gagal - Kredensial Salah', () => {
      cy.get('#email').type('user@invalid.com');
      cy.get('#pass').type('password123');
      cy.get('button[title="Login"]').click(); // Asumsi tombol login, sesuaikan jika diperlukan
      cy.get('.message-error').should('contain.text', 'Login atau kata sandi Anda salah');
    });
  
    it('Login Gagal - Email Kosong', () => {
      cy.get('#pass').type('berjalan#12345');
      cy.get('button[title="Login"]').click(); // Asumsi tombol login, sesuaikan jika diperlukan
      cy.get('#advice-required-entry-email').should('contain.text', 'This is a required field.');
    });
  
    it('Login Gagal - Password Kosong', () => {
      cy.get('#email').type('fendiriawan@gmail.com');
      cy.get('button[title="Login"]').click(); // Asumsi tombol login, sesuaikan jika diperlukan
      cy.get('#advice-required-entry-pass').should('contain.text', 'This is a required field.');
    });
  
    // Tambahkan skenario pengujian negatif lainnya jika diperlukan
  });
  