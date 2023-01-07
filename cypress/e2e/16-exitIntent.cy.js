describe("#16 - exit intent", () => {
  it("tests exit intent", () => {
    cy.visit("/exit_intent");
    cy.get("html").trigger("mouseleave", 0, 0);
    cy.get(".modal").should("be.visible");
  });
});
