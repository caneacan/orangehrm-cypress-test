describe('OrangeHRM UI Test Suite with Actions and Assertions', () => {
  beforeEach(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/');


    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();


    cy.url().should('include', '/dashboard/index');
    cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
  });

  it('TC_01 - Menampilkan dropdown profile', () => {

    cy.get('.oxd-userdropdown-name').should('be.visible').click();


    cy.get('.oxd-dropdown-menu').should('be.visible')
      .and('contain', 'About')
      .and('contain', 'Support')
      .and('contain', 'Change Password');
  });

  it('TC_02 - Menampilkan popup About dari dropdown profile', () => {
    cy.get('.oxd-userdropdown-name').click();
    cy.contains('About').click();

    cy.get('.oxd-sheet').should('be.visible')
      .and('contain', 'OrangeHRM')
      .and('contain', 'Version');
  });

  it('TC_03 - Membuka halaman Support dari dropdown profile', () => {
    cy.get('.oxd-userdropdown-name').click();
    cy.contains('Support').click();

  });
  
  it('TC_04 - Login dan elemen UI lengkap', () => {
    cy.get('input[name="username"]', { timeout: 10000 }).should('exist').and('be.visible');
    cy.get('input[name="password"]').should('exist').and('be.visible');
    cy.get('button[type="submit"]').should('contain', 'Login');
  });
});

