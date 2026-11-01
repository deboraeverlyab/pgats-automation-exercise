const seletores = {
  contaExcluida: '[data-qa="account-deleted"]',
  botaoContinuar: '[data-qa="continue-button"]',
}

function continuar() {
  cy.get(seletores.botaoContinuar).click()
}

function validarContaExcluida() {
  cy.get(seletores.contaExcluida)
    .should('be.visible')
    .and('contain', 'Account Deleted!')
}

module.exports = {
  continuar,
  validarContaExcluida,
}
