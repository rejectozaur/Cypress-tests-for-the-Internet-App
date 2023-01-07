Cypress.Commands.add("login", (username, password, url) => {
  cy.visit("/login");

  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("button[type=submit]").click();
});

Cypress.Commands.add("mockGeolocation", (latitude = 30, longitude = -98) => {
  cy.window().then(($window) => {
    cy.stub($window.navigator.geolocation, "getCurrentPosition", (callback) => {
      return callback({ coords: { latitude, longitude } });
    });
  });
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
