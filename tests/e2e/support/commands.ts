Cypress.Commands.add("login", () => {
  cy.visit("/auth/login");
  cy.get('input[name="email"]').type("eve.holt@reqres.in");
  cy.get('input[name="password"]').type("cityslicka");
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("logout", () => {
  cy.visit("/users");
  cy.contains("button", "log Out").click();
});
