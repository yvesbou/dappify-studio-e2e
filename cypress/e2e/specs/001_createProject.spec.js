describe('Create Project', () => {
    
    // before entire suite "Create Project"
    before(() => {
        cy.visitAndConnectToDappify();
    });

    // after this suite "Create Project"
    after(() => {
        // disconnect from site (remove Access) => requires cy.acceptMetamaskAccess() in consecutive visits
        cy.disconnectFromDappify();
    });

    // delete project which is created with the test case
    afterEach(() => {
        cy.visitProjects();
        cy.deleteExampleProject();
    })

    it('open new project', () => {
        cy.contains('Add Project').click();
        // choose and write project name
        cy.get('input').type('Example Project Cy');
        cy.contains('Continue').click();
        // select chain, only first works (li:first)
        cy.get('div[id="demo-simple-select"]').click().get('ul li:first').click();
        cy.contains('Continue').click();
        // read and accepted the terms and conditions and remove focus after it, to be able to click button
        cy.get('[type="checkbox"]').check().blur();
        // UI shows "Create Project", in html it has "Create project"
        cy.get('button').contains('Create').click();
        // wait for progress to become 100%
        cy.wait(7000);
        // click Continue
        cy.contains('Continue').click();
        // within project studio click link "My Projects"
        // UI shows "Create Project", in html it has "Create project"
        cy.get('a').contains('My projects').click();
        // within the overview check if Example Project is there
        cy.contains('Example Project Cy').should('exist');
    })

})