context('Login Tests', () => {

  it('Generar paleta de colores ', () => {
    cy.visit('https://lui5f3r.github.io/palette.html')
    cy.wait(500)    
    cy.get('[onclick="randomPalette();"]').click()
    cy.screenshot('primera_paleta')
    cy.get('[onclick="randomPalette();"]').click()
    cy.screenshot('segunda_paleta')
  })
});