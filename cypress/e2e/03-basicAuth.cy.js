describe("#3 - Basic Auth", () => {
  beforeEach(() => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
  });

  it("fails", () => {
    cy.visit("/basic_auth", {
      // cy.visit can't be moved to a custom method
      auth: {
        username: "wrongUser",
        password: "wrongPwd",
      },
      failOnStatusCode: false,
    });
    cy.get("body").should("have.text", "Not authorized\n");
  });

  it("passess", () => {
    cy.visit("/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    cy.get(".example p").should(
      "have.text",
      "\n    Congratulations! You must have the proper credentials.\n  "
    );
  });
});
