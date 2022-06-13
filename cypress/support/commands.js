// import "@testing-library/cypress/add-commands";

// add it here, because custom functions need synpress commands as well
import "@synthetixio/synpress/support";

// add custom functions

Cypress.Commands.add('visitDappify', () => {
  cy.visit('https://dev.dappify.com');
})

Cypress.Commands.add('visitProjects', () => {
  cy.visit('https://dev.dappify.com/projects');
})

Cypress.Commands.add('visitAndConnectToDappify', () => {
  cy.visitDappify();
  cy.contains('Sign').click(); 
  cy.contains('Confirm').click();
  cy.contains('Connect Wallet').click();
  cy.contains('Metamask').click();
  // accept access
  cy.acceptMetamaskAccess().should('be.true');
  // confirm request
  cy.confirmMetamaskSignatureRequest().should('be.true');
})

Cypress.Commands.add('disconnectFromDappify', () => {
  cy.disconnectMetamaskWalletFromDapp().should('be.true');
  // wait, otherwise state cleaning not 100% persistent
  cy.wait(3000);
});

Cypress.Commands.add('deleteExampleProject', () => {
  cy.contains('Example Project Cy').click();
  // inside project studio
  // scroll to place where delete button will be visible
  cy.get('h2').contains('Review your dApp configuration').scrollIntoView();
  // get and click this button
  cy.get('button').contains('Delete this Project').click();
  // this gets button "Delete Forever" within pop-up and clicks it
  cy.get('button').contains('Delete Forever').click();
})

Cypress.Commands.add('createExampleProject', () => {
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
  // now within project studio
})