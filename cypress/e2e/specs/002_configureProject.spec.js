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
        // disconnect from site (remove Access) => requires cy.acceptMetamaskAccess() in consecutive visits
        cy.disconnectFromDappify();
    });

    it('Configure Project to 100%', () => {
        cy.visitProjects();
        cy.contains('Example Project Cy').click();
        cy.wait(10000);
    })
})