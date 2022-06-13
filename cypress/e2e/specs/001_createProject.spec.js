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
        cy.confirmMetamaskSignatureRequest().should("be.true");
    });

    // after this suite "Create Project"
    after(() => {
        // disconnect from site (remove Access)
        cy.disconnectFromDappify().should("be.true");
    });

    // delete project which is created with the test case
    afterEach(()=>{
        cy.visit('https://dev.dappify.com/projects');
        cy.contains('Example Project Cy').click();
        // inside project studio
        // scroll to place where delete button will be visible
        cy.get('h2').contains('Review your dApp configuration').scrollIntoView();
        // get and click this button
        cy.get('button').contains('Delete this Project').click();
        // this gets button "Delete Forever" within pop-up and clicks it
        cy.get('button').contains('Delete Forever').click();
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
        cy.contains('Example Project Cy').should("exist");
    })

})