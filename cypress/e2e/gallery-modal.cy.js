describe("Photography gallery modal", () => {
  it("navigates with arrow keys and closes without changing scroll position", () => {
    cy.visit("http://127.0.0.1:8085/");
    cy.get("#photography").scrollIntoView();
    cy.get(".photography-gallery__thumb").first().click();

    cy.get(".photography-gallery__modal").should("be.visible");
    cy.get(".photography-gallery__modal p").invoke("text").then((initialCaption) => {
      cy.get("body").type("{rightarrow}");
      cy.get(".photography-gallery__modal p").should("not.have.text", initialCaption);
      cy.get("body").type("{leftarrow}");
      cy.get(".photography-gallery__modal p").should("have.text", initialCaption);
    });

    cy.window().then((window) => {
      var scrollTop = window.document.scrollingElement.scrollTop;

      cy.get(".photography-gallery__modal-image-button").click();
      cy.get(".photography-gallery__modal").should("not.exist");
      cy.window().its("document.scrollingElement.scrollTop").should("equal", scrollTop);
    });
  });
});
