const seletores = {
  logo: '.logo img',
  carrossel: '#slider-carousel',
}

function acessarHome() {
  cy.visit('/')
}

function validarHomeVisivel() {
  cy.title().should('eq', 'Automation Exercise')
  cy.get(seletores.logo).should('be.visible')
  cy.get(seletores.carrossel).should('be.visible')
}

module.exports = {
  acessarHome,
  validarHomeVisivel,
}
