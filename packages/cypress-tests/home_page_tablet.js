context("Home page tests Tablet Tests", () => {
  beforeEach(() => {
    cy.viewport(1280, 800); //tablet
    cy.visit("");
  });

  describe("Banner block", () => {
    it("Banner Block is present", () => {
      cy.get("main")
        .wait(500)
        .find("[data-cy=bannerVideoBlock]")
        .should("be.visible");
    });
  });

  describe("Hero slider", () => {
    it("Hero slider is present and works properly", () => {
      cy.get("main")
        .wait(500)
        .find("section.hero")
        .should("be.visible")
        .within(() => {
          cy.get("button")
            .eq(0)
            .should("be.visible")
            .and("not.be.disabled");
          cy.get("button")
            .eq(1)
            .should("be.visible")
            .and("be.disabled");
          //get next slide
          cy.get("button")
            .eq(0)
            .click()
            .should("be.visible")
            .and("not.be.disabled");
          cy.get("button")
            .eq(1)
            .should("be.visible")
            .and("not.be.disabled");
        });
    });
  });

  describe("Social Menu block", () => {
    it("Social Menu Block is present", () => {
      cy.get("main")
        .wait(500)
        .find("[data-cy=socialMenuBlock]")
        .should("be.visible");
    });
  });

  describe("Text block", () => {
    it("Text block is present", () => {
      cy.get("main")
        .find("section.typea")
        .should("be.visible");
    });
  });

  describe("Tile block", () => {
    it("Text block is present and visible", () => {
      cy.get("main")
        .find("section.typea")
        .should("be.visible");
    });
  });

  describe("Image block (type a)", () => {
    it("Image block is present and visible", () => {
      cy.get("main")
        .find("section.bp-imageBlock")
        .should("be.visible");
    });
  });

  describe("Image block (type b)", () => {
    it("Image block is present and visible", () => {
      cy.get("main")
        .find("section.typeb")
        .should("be.visible");
    });
  });
});
