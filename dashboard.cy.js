describe('OrangeHRM Login Test', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });

  it('Positive: Login with valid credentials', () => {

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();


    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain', 'Dashboard');
  });

  it('Cek semua komponen utama pada dashboard', () => {

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();


    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain', 'Dashboard');


    cy.contains('Time at Work', { timeout: 10000 }).should('be.visible');


    cy.contains('My Actions').should('be.visible');
    cy.get('.orangehrm-todo-list-item').should('have.length.at.least', 1);


    cy.contains('Quick Launch').should('be.visible');
    const quickLaunchItems = [
      'Assign Leave',
      'Leave List',
      'Timesheets',
      'Apply Leave',
      'My Leave',
      'My Timesheet'
    ];
    quickLaunchItems.forEach((item) => {
      cy.contains(item).should('be.visible');
    });


    cy.contains('Buzz Latest Posts').should('be.visible');

    cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.orangehrm-dashboard-widget.emp-leave-chart')
  .should('exist')
  .and('be.visible');
    


    cy.contains('Employee Distribution by Sub Unit').should('be.visible');
    cy.get('canvas').eq(0).should('be.visible');


    cy.contains('Employee Distribution by Location').should('be.visible');
    cy.get('canvas').eq(1).should('be.visible');
    cy.contains('Texas R&D').should('be.visible');
    cy.contains('New York Sal').should('be.visible');
    cy.contains('Unassigned').should('be.visible');


    cy.get('.oxd-userdropdown-name').should('be.visible');
    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Logout').should('be.visible');
  });
});
 