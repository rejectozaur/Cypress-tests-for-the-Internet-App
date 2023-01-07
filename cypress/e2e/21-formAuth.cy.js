describe("#21 - testing authentication", () => {
  it("with unsuccessful log in attempt", () => {
    cy.login("wrongUsername", "wrongPassword");
    cy.url().should("include", "/login");
    cy.get(".flash.error").contains(" Your username is invalid!");
  });

  it("with successful log in & log out attempt", () => {
    cy.login("tomsmith", "SuperSecretPassword!");
    cy.url().should("include", "/secure");

    cy.get(".flash.success").should(
      "contain",
      "You logged into a secure area!"
    );
    cy.get("h2").should("contain", "Secure Area");
    cy.get(".icon-signout").click();
    cy.url().should("include", "/login");
  });
});
