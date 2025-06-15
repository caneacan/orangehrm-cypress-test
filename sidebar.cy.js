describe('OrangeHRM Sidebar Navigation Test', () => {
  const baseUrl = 'https://opensource-demo.orangehrmlive.com/';

  beforeEach(() => {
    cy.visit(baseUrl);

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-topbar-header-title', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Dashboard');
  });

  const menuItems = [
    { label: 'Admin', expectedUrl: '/web/index.php/admin/' },
    { label: 'PIM', expectedUrl: '/web/index.php/pim/' },
    { label: 'Leave', expectedUrl: '/web/index.php/leave/' },
    { label: 'Time', expectedUrl: '/web/index.php/time/' },
    { label: 'Recruitment', expectedUrl: '/web/index.php/recruitment/' },
    { label: 'My Info', expectedUrl: '/web/index.php/pim/' },
    { label: 'Performance', expectedUrl: '/web/index.php/performance/' },
    { label: 'Dashboard', expectedUrl: '/web/index.php/dashboard/index' },
    { label: 'Directory', expectedUrl: '/web/index.php/directory/' },
    { label: 'Claim', expectedUrl: '/web/index.php/claim/' },
    { label: 'Buzz', expectedUrl: '/web/index.php/buzz/' }
  ];

it('should navigate through each sidebar menu with correct assertion', () => {
  cy.wrap(menuItems).each((menu) => {
    cy.get('body').then(($body) => {
      if ($body.find('input[name="password"]').length > 0) {
        cy.get('input[name="password"]').type('admin123');
        cy.contains('button', 'Confirm').click();
      }
    });

    cy.get('.oxd-sidepanel', { timeout: 10000 }).contains(menu.label).click();
    cy.url().should('include', menu.expectedUrl);

    if (menu.label !== 'Dashboard') {
      cy.get('.oxd-sidepanel', { timeout: 10000 }).contains('Dashboard').click();
      cy.url().should('include', '/web/index.php/dashboard/index');
    }
  });
});
});