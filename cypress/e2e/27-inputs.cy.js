const input = "input[type=number]";

describe("27 - testing inputs", () => {
  it("tests inputs", () => {
    cy.visit("/inputs");
    cy.get(input).should("be.empty");
    cy.get(input).type(1).should("have.value", 1);

    cy.get(input).type("{downArrow}{downArrow}").should("have.value", -1);
  });
});
