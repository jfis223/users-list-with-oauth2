describe("Users List", () => {
  it("should render a users list with 5 users", () => {
    cy.login();
    cy.get("table").should("exist");
    cy.get("table tbody tr").should("have.length", 5);
  });
  it("should change pages when clicking on number", () => {
    cy.login();
    let initialValue: string;
    cy.get("td")
      .invoke("text")
      .then((text) => {
        initialValue = text.trim();
        console.log(initialValue);
      });

    cy.contains("button", "2").click();

    cy.get("td")
      .invoke("text")
      .then((text) => {
        const newValue = text.trim();
        console.log(newValue);
        expect(newValue).not.to.equal(initialValue);
      });
  });
  it("should render first page if clicking on chevron right on last page", () => {
    cy.login();
    cy.contains("button", "3").click();
    cy.contains("button", ">").click();
    cy.contains("button", "1").should("have.css", "pointer-events", "none");
  });
  it("should render last page if clicking on chevron left on first page", () => {
    cy.login();
    cy.contains("button", "<").click();
    cy.contains("button", "3").should("have.css", "pointer-events", "none");
  });
  it("should create a user successfully", () => {
    cy.login();
    cy.contains("a", "Create user").click();
    cy.url().should("contain", "new");
    cy.get('input[name="name"]').type("Test");
    cy.get('input[name="job"]').type("Test");
    cy.get('button[type="submit"]').click();
    cy.contains("User successfully created with ID");
  });
  it("should edit a user successfully", () => {
    cy.login();
    cy.contains("a", "View More ").click();
    cy.contains("a", "Edit ").click();
    cy.url().should("contain", "edit");
    cy.wait(3000);
    cy.get('input[name="name"]').type("Test");
    cy.get('input[name="job"]').type("Test");
    cy.get('button[type="submit"]').click();
    cy.contains("User has been edited");
  });
});
