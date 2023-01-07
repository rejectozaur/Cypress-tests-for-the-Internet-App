describe("#9 - disappearing elements", () => {
  it("test disappearing elements", () => {
    // Gallery disappears by default, I'd assume it's a bug in real life and assertion should fail
    cy.visit("/disappearing_elements");
    const buttons = ["Home", "About", "Contact Us", "Portfolio", "Gallery"];
    for (let i = 0; i < buttons.length; i++) {
      cy.get("a").contains(`${buttons[i]}`);
    }
  });
});
