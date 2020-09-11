context("Banner Block", () => {
  describe("Banner Video tests", () => {
    it("Banner Video is present and has a CTA button", () => {
      cy.visit("")
        .get("[data-cy=bannerVideoBlock]")
        .should("be.visible")
        .find("[data-cy=bannerVideoLink]")
        .within(() => {
          cy.get("[data-cy=bannerVideoButton]")
            .should("be.visible")
            .and("not.be.disabled");
        });
    });
    it("Banner Video should be linked to a youtube video", () => {
      cy.visit("")
        .get("[data-cy=bannerVideoBlock]")
        .should("be.visible")
        .find("[data-cy=bannerVideoImage]")
        .should("be.visible")
        .within(() => {
          cy.get("button")
            .should("have.attr", "data-url")
            .and("contain", "www.youtube.com");
        });
    });
  });

  describe("Banner Image tests", () => {
    it("Banner image is present", () => {
      cy.visit("inspiring-stories/")
        .get("[data-cy=bannerImageBlock]")
        .should("be.visible")
        .find("[data-cy=bannerImage]")
        .should("be.visible");
    });
  });
});
