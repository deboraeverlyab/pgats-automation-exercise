const seletores = {
  rodape: 'footer',
  tituloAssinatura: '.single-widget h2',
  email: '#susbscribe_email',
  botaoAssinar: '#subscribe',
  mensagemSucesso: '#success-subscribe',
}

function rolarAteORodape() {
  cy.get(seletores.rodape).scrollIntoView()
}

function assinarNewsletter(email) {
  cy.get(seletores.email).type(email)
  cy.get(seletores.botaoAssinar).click()
}

function validarSecaoDeAssinaturaVisivel() {
  cy.get(seletores.tituloAssinatura)
    .should('be.visible')
    .and('contain', 'Subscription')
}

function validarAssinaturaRealizada() {
  cy.get(seletores.mensagemSucesso)
    .should('be.visible')
    .and('contain', 'You have been successfully subscribed!')
}

module.exports = {
  rolarAteORodape,
  assinarNewsletter,
  validarSecaoDeAssinaturaVisivel,
  validarAssinaturaRealizada,
}
