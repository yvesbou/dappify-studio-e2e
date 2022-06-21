describe('Configure Project', () => {

    // before entire suite "Create Project"
    before(() => {
        cy.visitAndConnectToDappify();
    });

    beforeEach(() => {
        cy.createExampleProject();
    })

    afterEach(() => {
        cy.visitProjects();
        cy.deleteExampleProject();
    })

    // after this suite "Create Project"
    after(() => {
        // we want to disconnect from site (remove Access) this requires cy.acceptMetamaskAccess() in consecutive visits
        cy.disconnectFromDappify();
    });

    it('complete new project', () => {
        cy.pause(15000); // wait for cards to arrive (not proper way)
        
        // opens the nav (sometimes clicks a link by chance, if so following code doesn't work anymore)
        cy.get('[data-cy="sidebar-nav-studio"]').click(); 
        // click dApp Info Link
        cy.get('[data-cy="dApp Info"]').click();

        // add description to the project 
        cy.get('[data-cy=project-description-textfield]').find('textarea').first().click().type('Some description').blur();
        
        // check if now 40% 
        cy.get('[data-cy=configuration-progress-percentage]').contains('40%');

        // try typing email address find('input')
        cy.get('[data-cy=email-address-textfield]').find('input').click().type('example@email.com').blur();

        // check if now 60% 
        cy.get('[data-cy=configuration-progress-percentage]').contains('60%');

        // switch to templates
        cy.get('[data-cy="Add Templates"]').click();

        // choose nft marketplace
        cy.get('[data-cy="NFT Marketplace Install Button"]').click();

        // alert dialog opens ("Preview my DApp")
        cy.get('[data-cy=dialog-preview-my-dapp-button]').should('have.attr', 'target', '_blank')

        // opens the nav and removes alert dialog
        // alert dialog leads to new tab, cypress does not expose browser automation API by choice
        // force needed because all elements are being covered by alert dialog, otherwise click does not work
        cy.get('[data-cy="sidebar-nav-studio"]').click({force: true}); 
        // check if now 100%
        cy.get('[data-cy=configuration-progress-percentage]').contains('100%');
    })
})