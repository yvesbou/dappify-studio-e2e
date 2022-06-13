describe('Test User Login', () => {
    // no before routine, just start from landing page, login from landing page

    // disconnect from application, to have full onboarding for every test
    afterEach(()=> {
        cy.disconnectFromDappify().should("be.true");
        // wait, otherwise state cleaning not 100% persistent
        cy.wait(3000);
    })

    it('Connects with Metamask', () => {
        cy.visit('https://dev.dappify.com')
        cy.contains('Sign').click(); 
        // first time arrival of client to console / studio requires pressing confirm button
        cy.contains('Confirm').click();
        cy.contains('Connect Wallet').click();
        cy.contains('Metamask').click();
        // first time access to dapp via metamask
        cy.acceptMetamaskAccess().should("be.true");
        cy.confirmMetamaskSignatureRequest().should("be.true");
        // indicator that logged-in
        cy.contains('Add Project').should('be.visible');

    })
  })