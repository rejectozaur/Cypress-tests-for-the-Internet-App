describe("24 - testing horizontal slider", () => {
  it("tests horizontal slider", () => {
    cy.visit("/horizontal_slider");
    cy.get("input[type=range]").invoke("val", 5.0).trigger("change");
    cy.get("span#range").should("have.text", 5.0);
  });
});
