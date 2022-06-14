describe('Configure Project', () => {

    // before entire suite "Create Project"
    before(() => {
        cy.visitAndConnectToDappify();
    });

    beforeEach(() => {
        cy.createExampleProject();
        cy.visitProjects();
        cy.pause(6000);
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

    // // 002_2
    // it('open new project', () => {
    //     cy.visitProjects();
    //     cy.contains('Example Project Cy').click();
    //     cy.get('textarea').type('My example description of this project.');
    //     // check if now 40% 
    //     cy.get('Look & Feel').focus().scroll(0,500);
    //     cy.wait(6000);
    //     cy.contains('40%').should('be.true');
    // })

    // 002_3
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



    // 002_2
    it('open and complete new project', () => {
        cy.visitProjects();
        cy.contains('Example Project Cy').click();
        cy.get('textarea').type('My example description of this project.');
        // check if now 40% 
        cy.get('Look & Feel').focus().scroll(0,500);
        cy.wait(6000);
        cy.contains('40%').should('be.true');
    })

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

    // 002_1
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