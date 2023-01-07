describe("#6 - checkboxes", () => {
  it("#6 - checkboxes", () => {
    cy.visit("/checkboxes");
    const checkbox = "input[type='checkbox']";

    cy.get(checkbox).first().should("not.be.checked");
    cy.get(checkbox).last().should("be.checked");

    cy.get(checkbox).first().check().should("be.checked");
    cy.get(checkbox).last().uncheck().should("not.be.checked");
  });
});
