const seletores = {
  tituloLogin: '.login-form h2',
  email: '[data-qa="login-email"]',
  senha: '[data-qa="login-password"]',
  botaoEntrar: '[data-qa="login-button"]',
  mensagemErro: '.login-form form p',
}

function acessarLogin() {
  cy.visit('/login')
}

function efetuarLogin(email, senha) {
  cy.get(seletores.email).type(email)
  cy.get(seletores.senha).type(senha)
  cy.get(seletores.botaoEntrar).click()
}

function validarFormularioDeLoginVisivel() {
  cy.get(seletores.tituloLogin)
    .should('be.visible')
    .and('contain', 'Login to your account')
}

function validarMensagemDeErro() {
  cy.get(seletores.mensagemErro)
    .should('be.visible')
    .and('contain', 'Your email or password is incorrect!')
}

function validarPaginaDeLogin() {
  cy.url().should('include', '/login')
  validarFormularioDeLoginVisivel()
}

module.exports = {
  acessarLogin,
  efetuarLogin,
  validarFormularioDeLoginVisivel,
  validarMensagemDeErro,
  validarPaginaDeLogin,
}
