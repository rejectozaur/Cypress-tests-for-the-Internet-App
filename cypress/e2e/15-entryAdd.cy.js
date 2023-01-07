describe("#15 - testing entry add", () => {
  it("tests entry add", () => {
    cy.visit("/entry_ad");
    const modal = ".modal";

    cy.get(modal).should("be.visible");
    cy.get(modal).contains("Close").click();
    cy.reload();
    cy.get(modal).should("not.be.visible");
    cy.get("#restart-ad").click();
    cy.get(modal).should("be.visible");
  });
});
