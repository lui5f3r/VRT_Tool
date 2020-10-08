context('VRT Test', () => {

  it('Generar paleta de colores ', () => {
    cy.visit('https://lui5f3r.github.io/palette.html')
    cy.wait(500)    
    cy.get('[onclick="randomPalette();"]').click()
    cy.wait(500)    
    cy.screenshot(`primera_paleta${Cypress.env('id')}`)
    cy.get('[onclick="randomPalette();"]').click()
    cy.wait(500)    
    cy.screenshot(`segunda_paleta${Cypress.env('id')}`)
  })
});