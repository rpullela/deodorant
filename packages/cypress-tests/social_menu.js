context("Social Menu", () => {
  beforeEach(() => {
    cy.visit("");
  });

  describe("Social Menu tests", () => {
    it("Social Menu has Socials", () => {
      cy.get("section")
        .find("[data-cy=socialMenu]")
        .find("ul")
        .should("be.visible")
        .find("li")
        .within(() => {
          cy.get("a")
            .should("be.visible")
            .should("have.attr", "href")
            .and("contain", "https://twitter.com/degree");
          cy.get("a")
            .eq(1)
            .should("be.visible")
            .should("have.attr", "href")
            .and("contain", "https://www.youtube.com/Degree");
          cy.get("a")
            .eq(2)
            .should("be.visible")
            .should("have.attr", "href")
            .and("contain", "https://www.facebook.com/Degree/");
          cy.get("a")
            .eq(3)
            .should("be.visible")
            .should("have.attr", "href")
            .and("contain", "https://www.instagram.com/degree/");
        });
    });
  });
});
