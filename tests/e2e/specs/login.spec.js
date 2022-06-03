describe('Test User Login', () => {

    it('Connects with Metamask', () => {
        cy.visit('https://dappify.com')
        cy.contains('Sign').click(); 
        cy.contains('Confirm').click();
        cy.contains('Connect Wallet').click();
        cy.contains('Metamask').click();
        cy.switchToMetamaskWindow();
        cy.acceptMetamaskAccess().should("be.true");
        cy.confirmMetamaskSignatureRequest();
        cy.switchToCypressWindow();
        cy.contains('Add Project').should('be.visible');

    })
  })