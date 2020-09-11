context("Header and Footer", () => {
  beforeEach(() => {
    cy.visit("");
  });

  describe("Header tests", () => {
    it("Header is present and has Navigation bar", () => {
      cy.get("header")
        .find("div")
        .first()
        .find("nav")
        .should("be.visible")
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

    it("Header contains upper nav menu", () => {
      cy.get("header")
        .find("[data-cy=headerContent]")
        .should("be.visible")
        .find("[data-cy=upperNav]")
        .should("be.visible")
        .within(() => {
          cy.get("[data-cy=contactUsLink]")
            .should("contain", "Contact")
            .should("have.attr", "href")
            .and("contain", "/contact-us");
          cy.get("[data-cy=aboutUsLink]")
            .should("contain", "About Us")
            .should("have.attr", "href")
            .and("contain", "/about-us");
          cy.get("[data-cy=faqsLink]")
            .should("contain", "FAQs")
            .should("have.attr", "href")
            .and("contain", "/faqs");
        });
    });

    it("Header has a visible logo", () => {
      cy.get("header")
        .find("[data-cy=logo]")
        .should("be.visible")
        .find("svg")
        .should("be.visible");
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
