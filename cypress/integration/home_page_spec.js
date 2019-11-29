describe("The Home Page", function() {
  it("successfully loads", function() {
    // gatsby build and gatsby serve
    cy.visit("http://localhost:9000")
  })

  it("opens and closes the sidebar", function() {
    cy.get('[data-cy="sidebar-control"]').click()
    cy.get('[data-cy="sidebar"]')
      .find('[data-cy="sidebar-close-button"]')
      .click()
  })

  it("navitgate from the sidebar", function() {
    cy.get('[data-cy="sidebar-control"]').click()
    cy.get('[data-cy="sidebar"]')
      .find('[href="/chairs/armchairs"]')
      .click()
    cy.url().should("include", "/chairs/armchairs")
  })
})
