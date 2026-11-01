const seletores = {
  signupLogin: '.navbar-nav a[href="/login"]',
  produtos: '.navbar-nav a[href="/products"]',
  carrinho: '.navbar-nav a[href="/view_cart"]',
  logout: '.navbar-nav a[href="/logout"]',
  excluirConta: '.navbar-nav a[href="/delete_account"]',
  menu: '.navbar-nav',
}

function irParaSignupLogin() {
  cy.get(seletores.signupLogin).click()
}

function irParaProdutos() {
  cy.get(seletores.produtos).click()
}

function irParaCarrinho() {
  cy.get(seletores.carrinho).click()
}

function efetuarLogout() {
  cy.get(seletores.logout).click()
}

function excluirConta() {
  cy.get(seletores.excluirConta).click()
}

function validarUsuarioLogado(nome) {
  cy.contains(seletores.menu, 'Logged in as ' + nome).should('be.visible')
}

module.exports = {
  irParaSignupLogin,
  irParaProdutos,
  irParaCarrinho,
  efetuarLogout,
  excluirConta,
  validarUsuarioLogado,
}
