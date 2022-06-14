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
        cy.deleteExampleProject();
    })

    // after this suite "Create Project"
    after(() => {
        // disconnect from site (remove Access) => requires cy.acceptMetamaskAccess() in consecutive visits
        cy.disconnectFromDappify();
    });

    // 002_1: empty beforeEach hook, creating project inside test case instead of using re-factored cy.createExampleProject();
    // => failed
    // it('complete config', () => {
    //     cy.visitProjects();
    //     cy.contains('Add Project').click();
    //     // choose and write project name
    //     cy.get('input').type('Example Project');
    //     cy.contains('Continue').click();
    //     // select chain, only first works (li:first)
    //     cy.get('div[id="demo-simple-select"]').click().get('ul li:first').click();
    //     cy.contains('Continue').click();
    //     // read and accepted the terms and conditions and remove focus after it, to be able to click button
    //     cy.get('[type="checkbox"]').check().blur();
    //     // UI shows "Create Project", in html it has "Create project"
    //     cy.get('button').contains('Create').click();
    //     // wait for progress to become 100%
    //     cy.wait(7000);
    //     // click Continue
    //     cy.contains('Continue').click();
    //     // within project studio click link "My Projects"
    //     // UI shows "Create Project", in html it has "Create project"
    //             // cy.visitProjects();
    //     // cy.contains('Example Project Cy').click();
    //     // cy.wait(2000);
    //     cy.get('textarea').type('My example description of this project.');
    //     // check if now 40% 
    //     cy.get('Look & Feel').focus().scroll(0,500);
    //     cy.wait(6000);
    //     cy.contains('40%').should('be.true');
    //     // how to scroll in navbar
    // })

    // // 002_2 visit projects inside test case => failed
    // it('open new project', () => {
    //     cy.visitProjects();
    //     cy.contains('Example Project Cy').click();
    //     cy.get('textarea').type('My example description of this project.');
    //     // check if now 40% 
    //     cy.get('Look & Feel').focus().scroll(0,500);
    //     cy.wait(6000);
    //     cy.contains('40%').should('be.true');
    // })

    // 002_3 wait inside test case => skipped (failed)
    // it('configure to 100percent', () => {
    //     cy.wait(10000);
    //     cy.visitProjects();
    //     cy.contains('Example Project Cy').click();
    //     cy.get('textarea').type('My example description of this project.');
    //     // check if now 40% 
    //     cy.get('Look & Feel').focus().scroll(0,500);
    //     cy.wait(6000);
    //     cy.contains('40%').should('be.true');
    // })

    // 002_4 waiting in beforeEach hook and visiting the project overview page
    // left out completely, not even mentioned in test runner (left panel)
    // it('open and complete new project', () => {
    //     cy.contains('Example Project Cy').click();
    //     cy.get('textarea').type('My example description of this project.');
    //     // check if now 40% 
    //     cy.get('Look & Feel').focus().scroll(0,500).blur();
    //     cy.wait(6000);
    //     cy.contains('40%').should('be.true');
    // })

    // 002_5 no waiting, just continue from beforeEach hook with freshly new created project within the project studio
    it('open and complete new project', () => {
        cy.get('textarea').type('My example description of this project.');
        // check if now 40% 
        cy.get('Look & Feel').focus().scroll(0,500).blur();
        cy.wait(6000);
        cy.contains('40%').should('be.true');
    })


    // 002_2
    // it('open and complete new project', () => {
    //     cy.visitProjects();
    //     cy.contains('Example Project Cy').click();
    //     cy.get('textarea').type('My example description of this project.');
    //     // check if now 40% 
    //     cy.get('Look & Feel').focus().scroll(0,500);
    //     cy.wait(6000);
    //     cy.contains('40%').should('be.true');
    // })

    // 002_4 (cy.visitProjects(); inside before hook, same as in 001)
    // it('complete config', () => {
    //         cy.contains('Add Project').click();
    //         // choose and write project name
    //         cy.get('input').type('Example Project');
    //         cy.contains('Continue').click();
    //         // select chain, only first works (li:first)
    //         cy.get('div[id="demo-simple-select"]').click().get('ul li:first').click();
    //         cy.contains('Continue').click();
    //         // read and accepted the terms and conditions and remove focus after it, to be able to click button
    //         cy.get('[type="checkbox"]').check().blur();
    //         // UI shows "Create Project", in html it has "Create project"
    //         cy.get('button').contains('Create').click();
    //         // wait for progress to become 100%
    //         cy.wait(7000);
    //         // click Continue
    //         cy.contains('Continue').click();
    //         // within project studio click link "My Projects"
    //         // UI shows "Create Project", in html it has "Create project"
    //                 // cy.visitProjects();
    //         // cy.contains('Example Project Cy').click();
    //         // cy.wait(2000);
    //         cy.get('textarea').type('My example description of this project.');
    //         // check if now 40% 
    //         cy.get('Look & Feel').focus().scroll(0,500);
    //         cy.wait(6000);
    //         cy.contains('40%').should('be.true');
    //         // how to scroll in navbar
    //     })

    

    // 002
    // it('Configure Project to 100%', () => {
    //     // cy.visitProjects();
    //     // cy.contains('Example Project Cy').click();
    //     // cy.wait(2000);
    //     cy.get('textarea').type('My example description of this project.');
    //     // check if now 40% 
    //     cy.get('Look & Feel').focus().scroll(0,500);
    //     cy.wait(6000);
    //     cy.contains('40%').should('be.true');
    //     // how to scroll in navbar
    // })

    // 002 different naming
    // it('Configure Project to 100percent', () => {
    //     // cy.visitProjects();
    //     // cy.contains('Example Project Cy').click();
    //     // cy.wait(2000);
    //     cy.get('textarea').type('My example description of this project.');
    //     // check if now 40% 
    //     cy.get('Look & Feel').focus().scroll(0,500);
    //     cy.wait(6000);
    //     cy.contains('40%').should('be.true');
    //     // how to scroll in navbar
    // })

    
})