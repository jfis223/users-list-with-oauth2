describe("Render Auth Page", () => {
  before(() => {
    cy.visit("/");
  });

  it("should render login page if logged out", () => {
    cy.visit("/users");
    cy.getCookie("session").should("not.exist");
    cy.contains("Welcome");
  });

  it("should fill the form and click login", () => {
    cy.login();
    cy.url().should("include", "/users");
    cy.getCookie("session").should("exist");
  });

  it("should log out after login", () => {
    cy.login();
    cy.url().should("include", "/auth/login");
    cy.getCookie("session").should("not.exist");
  });
});
