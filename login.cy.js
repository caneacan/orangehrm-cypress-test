describe('OrangeHRM Login Test', () => {
  const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Positive: Login with valid credentials', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Assertion: Pastikan dashboard muncul
    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain', 'Dashboard');
  });

  it('Negative: Login with invalid password', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('Hasan10');
    cy.get('button[type="submit"]').click();

    // Assertion: Muncul pesan error
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });

  it('Negative: Login with empty password', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').should('have.value', '');
    cy.get('button[type="submit"]').click();

    // Assertion: Required field muncul
    cy.get('.oxd-input-group .oxd-text')
      .should('contain', 'Required');
  });
});
