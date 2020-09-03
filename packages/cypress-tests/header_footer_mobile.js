context("Header and Footer Mobile Tests", () => {
  beforeEach(() => {
    cy.viewport(375, 812); //iphone x
    cy.visit("");
  });

  describe("Header tests", () => {
    it("Header is present and has Navigation bar", () => {
      cy.get("header")
        .find("div")
        .first()
        .find("span")
        .should("be.visible")
        .contains("Toggle Navigation")
        .parent()
        .wait(1000)
        .click()
        .get("#nav")
        .find("ul")
        .should("contain", "Get Motivated")
        .and("be.visible")
        .should("contain", "Get Moving")
        .and("be.visible")
        .should("contain", "Get Mentored")
        .and("be.visible")
        .should("contain", "Get Confident")
        .and("be.visible")
        .should("contain", "Product")
        .and("be.visible");
    });
  });

  describe("Footer tests", () => {
    it("Footer has Navigation bar", () => {
      cy.get("footer")
        .find("nav")
        .find("ul")
        .should("be.visible")
        .find("li")
        .should("contain", "Sure Advanced Reference")
        .and("be.visible")
        .should("contain", "Privacy")
        .and("be.visible")
        .should("contain", "Cookie Notice")
        .and("be.visible")
        .should("contain", "Contact Us")
        .and("be.visible")
        .should("contain", "Site Map")
        .and("be.visible")
        .should("contain", "Terms of Use")
        .and("be.visible");
    });

    it("Footer has Copyright", () => {
      cy.get("footer")
        .find("div")
        .last()
        .should("be.visible")
        .should("contain", "Copyright")
        .and("be.visible")
        .should("contain", new Date().getFullYear());
    });
  });
});
