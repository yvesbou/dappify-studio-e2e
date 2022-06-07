import "@testing-library/cypress/add-commands";

// add it here, because custom functions need synpress commands as well
import "@synthetixio/synpress/support";

// add custom functions

Cypress.Commands.add("disconnectFromDappify", () => {
    cy.disconnectMetamaskWalletFromDapp().should("be.true");
  });

Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click()
})

console.log('here');