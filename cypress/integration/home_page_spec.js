describe("The Home Page", function() {
  it("successfully loads", function() {
    // gatsby build and gatsby serve
    cy.visit("http://localhost:9000")
  })

  it("opens the sidebar", function() {
    cy.get('button[data-cy="sidebar-control"]').click()
    // cy.get("[class]")
  })
})
