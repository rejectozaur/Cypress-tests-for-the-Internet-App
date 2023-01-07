describe("#13 - testing dynamic controls", () => {
  beforeEach(() => {
    cy.visit("/dynamic_controls");
  });

  it("tests (un)checking/removing/adding checkboxes", () => {
    const btn = "#checkbox-example > button[type=button]";
    const msgBox = "#checkbox-example > #message";
    const checkbox = ":checkbox";

    cy.get(checkbox).should("be.visible");
    cy.get(checkbox).check().and("be.checked");
    cy.get(checkbox).uncheck().and("not.be.checked");

    cy.get(btn).contains("Remove").click();
    cy.get("#loading", {
      timeout: 500,
    }).should("be.visible");
    cy.get(checkbox).should("not.exist");
    cy.get(msgBox).contains("It's gone!");

    cy.get(btn).contains("Add").click();
    cy.get("#loading", {
      timeout: 500,
    }).should("be.visible");
    cy.get(checkbox).first().should("be.visible");
    cy.get(msgBox).contains("It's back!");
  });

  it("tests enabling/disabling/typing value in text field", () => {
    const inputField = "input[type=text]";
    const btn = "#input-example > button[type=button]";
    const msgBox = "#input-example > #message";

    cy.get(inputField).should("be.disabled");
    cy.get(btn).contains("Enable").click();
    cy.get("#loading", {
      // when I use nth-child, cypress doesn't see 1/3 loaders; 1 loader loads at a time
      timeout: 500,
    }).should("be.visible");
    cy.get(msgBox).contains("It's enabled!");
    cy.get(inputField).type("test input in the text field");
    cy.get(btn).contains("Disable").click();
    cy.get(inputField).should("be.disabled");
    cy.get(msgBox, {
      timeout: 500,
    }).contains("It's disabled!");
  });
});
