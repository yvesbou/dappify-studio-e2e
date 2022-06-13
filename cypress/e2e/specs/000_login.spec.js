describe('Test User Login', () => {
    // no before routine, just start from landing page, login from landing page

    // disconnect from application, to have full onboarding for every test
    afterEach(()=> {
        cy.disconnectFromDappify().should("be.true");
        // wait, otherwise state cleaning not 100% persistent
        cy.wait(3000);
        // cy.disconnectMetamaskWalletFromDapp().should("be.true");
    })

    it('Connects with Metamask', () => {
        cy.visit('https://dev.dappify.com')
        cy.contains('Sign').click(); 
        cy.contains('Confirm').click();
        cy.contains('Connect Wallet').click();
        cy.contains('Metamask').click();
        cy.acceptMetamaskAccess().should("be.true"); // failed because cy.disconnectFromDappify() failed in prev suite (remaining state)
        cy.confirmMetamaskSignatureRequest().should("be.true");
        cy.contains('Add Project').should('be.visible');

    })
  })