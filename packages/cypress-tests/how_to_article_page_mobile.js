context("HowTo article tests", () => {
  beforeEach(() => {
    cy.viewport(375, 812); //iphone x
    cy.visit("/learning-how-to-french-twist-a-quick-step-by-step-tutorial/");
  });

  describe("Article Header", () => {
    it("Article Header is present and works properly", () => {
      cy.get("main")
        .wait(500)
        .find("[data-cy=articleHeader]")
        .should("be.visible");
      cy.get("[data-cy=articleHeaderTitle]").should("be.visible");
      cy.get("[data-cy=articleHeaderSubTitle]").should("be.visible");
      cy.get("[data-cy=articleHeaderInfo]").should("be.visible");
      cy.get("[data-cy=socialMenu]").should("be.visible");
      cy.get("img").should("be.visible");
      cy.get("[data-cy=articleHeaderTutorialInfo]").should("be.visible");
    });
  });
});
