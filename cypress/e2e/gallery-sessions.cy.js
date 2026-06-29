describe("Photography gallery sessions", () => {
  it("shows only the session covers in the grid and opens their attached series in the modal", () => {
    cy.visit(Cypress.env("BASE_URL") || "http://127.0.0.1:8085/");
    cy.get("#photography").scrollIntoView();

    cy.get(".photography-gallery__thumb img[src*='photo_061.']")
      .should("have.length", 1)
      .click({ force: true });

    cy.get(".photography-gallery__modal").should("be.visible");
    cy.get(".photography-gallery__series-thumb").should("have.length", 11);
    cy.get(".photography-gallery__modal p").should("contain", "1 of 11");

    cy.get("body").type("{rightarrow}");
    cy.get(".photography-gallery__modal p").should("contain", "2 of 11");
    cy.get(".photography-gallery__modal-image")
      .should("have.attr", "src")
      .and("include", "photo_091");

    cy.get(".photography-gallery__modal-image-button").click();

    cy.get(".photography-gallery__thumb img[src*='photo_062.']")
      .should("have.length", 1)
      .click({ force: true });

    cy.get(".photography-gallery__modal").should("be.visible");
    cy.get(".photography-gallery__series-thumb").should("have.length", 15);
    cy.get(".photography-gallery__modal p").should("contain", "1 of 15");

    cy.get("body").type("{rightarrow}");
    cy.get(".photography-gallery__modal p").should("contain", "2 of 15");
    cy.get(".photography-gallery__modal-image")
      .should("have.attr", "src")
      .and("include", "photo_101");

    cy.get(".photography-gallery__modal-image-button").click();

    cy.get(".photography-gallery__thumb img[src*='photo_068.']")
      .should("have.length", 1)
      .click({ force: true });

    cy.get(".photography-gallery__modal").should("be.visible");
    cy.get(".photography-gallery__series-thumb").should("have.length", 4);
    cy.get(".photography-gallery__modal p").should("contain", "1 of 4");

    cy.get("body").type("{rightarrow}");
    cy.get(".photography-gallery__modal p").should("contain", "2 of 4");
    cy.get(".photography-gallery__modal-image")
      .should("have.attr", "src")
      .and("include", "photo_115");
  });
});
