describe("#14 - testing dynamic loading", () => {
    const loader = "#loading";
    beforeEach(() => {
      cy.visit("/dynamic_loading");
    });
  
    it("tests element rendered after the fact", () => {
      cy.get("a:nth-child(8)").click();
      cy.get("#start").contains("Start").click();
      cy.get(loader, { timeout: 500 }).should("be.visible");
      cy.get("h4").contains("Hello World!", { timeout: 5500 });
    });
  });
  