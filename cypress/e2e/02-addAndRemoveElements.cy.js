describe("#2 - add/remove elements", () => {
  it("tests elements getting added/removed", () => {
    const btn = "button";
    const btnName = "Delete";

    cy.visit("/add_remove_elements/");
    cy.get(btn).contains("Add Element").dblclick();
    cy.get(btn).contains(btnName).should("be.visible").and("have.length", 2);
    cy.get(btn).contains(btnName).last().click().should("have.length", 1);
  });
});
