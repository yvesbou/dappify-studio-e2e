describe('Create Project', () => {
    
    // before entire suite "Create Project"
    before(() => {
        cy.visit('https://dev.dappify.com')
        cy.contains('Sign').click(); 
        cy.contains('Confirm').click();
        cy.contains('Connect Wallet').click();
        cy.contains('Metamask').click();
        // accept access
        cy.acceptMetamaskAccess().should("be.true");
        // confirm request
        cy.confirmMetamaskSignatureRequest();
    });

    // after this suite "Create Project"
    after(() => {
        // cy.clickLink('Hello');
        // disconnect from site (remove Access)
        cy.disconnectFromDappify().should("be.true");
    });

    it('open new project', () => {
        cy.contains('Add Project').click();
    })

})