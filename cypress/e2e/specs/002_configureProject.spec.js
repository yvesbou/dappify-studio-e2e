describe('Configure Project', () => {

    // before entire suite "Create Project"
    before(() => {
        cy.visitAndConnectToDappify();
    });

    beforeEach(() => {
        cy.createExampleProject();
        // cy.visitProjects(); // commented in try 002_5
        // cy.pause(10000); // commented in try 002_5
    })

    afterEach(() => {
        cy.visitProjects();
        // cy.pause(15000); // wait for cards to arrive (not proper way)
        cy.deleteExampleProject();
    })

    // after this suite "Create Project"
    after(() => {
        // disconnect from site (remove Access) => requires cy.acceptMetamaskAccess() in consecutive visits
        cy.disconnectFromDappify();
    });

    it('open and complete new project', () => {
        cy.pause(15000); // wait for cards to arrive (not proper way)

        // cy.get('[data-cy="dApp Info"]').click({force: true}); => works but not best practice
        // cy.get('[data-cy=sidebar-nav-studio]').contains('a', 'dApp Info').click(); // => not found, first click it then check for contain
        
        // opens the nav (sometimes clicks a link by chance, following code doesn't work anymore)
        cy.get('[data-cy="sidebar-nav-studio"]').click(); 
        // click dApp Info Link
        cy.get('[data-cy="dApp Info"]').click();
        // cy.contains('a', 'dApp Info').click() => works

        // add description to the project
        cy.get('[data-cy=project-description-textfield]').click();
        cy.contains('label', 'Shortly, what is it about?').type('Some description.'); 
        // cannot call blur like this => .type(' ').blur() => `cy.blur()` can only be called on the focused element. Currently the focused element is a: `<textarea
        cy.get('[data-cy=project-description-textfield]').blur();
        // opens the nav (maybe needed?)
        cy.get('[data-cy="sidebar-nav-studio"]').click(); 
        // check if now 40% 
        cy.get('[data-cy=configuration-progress-percentage]').should('equal', '40%');

        // try typing email address
        cy.get('[data-cy=email-address-textfield]').click().type('example@email.com').blur();
        // opens the nav (maybe needed?)
        cy.get('[data-cy="sidebar-nav-studio"]').click(); 
        // check if now 60% 
        cy.get('[data-cy=configuration-progress-percentage]').should('equal', '60%');

        // opens the nav
        cy.get('[data-cy="sidebar-nav-studio"]').click(); 
        // switch to templates
        cy.get('[data-cy="Add Templates"]').click();

        // choose nft marketplace
        cy.get('[data-cy="NFT Marketplace Install Button"]').click();

        // opens the nav (maybe needed?)
        cy.get('[data-cy="sidebar-nav-studio"]').click(); 
        // check if now 100%
        cy.get('[data-cy=configuration-progress-percentage]').should('equal', '100%');
    })
})