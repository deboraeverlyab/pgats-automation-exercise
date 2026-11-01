const seletores = {
  tituloNovoUsuario: '.signup-form h2',
  nome: '[data-qa="signup-name"]',
  email: '[data-qa="signup-email"]',
  botaoSignup: '[data-qa="signup-button"]',
  mensagemErro: '.signup-form form p',

  tituloInformacoesDaConta: '.login-form h2',
  tituloSra: '#id_gender2',
  senha: '[data-qa="password"]',
  dia: '[data-qa="days"]',
  mes: '[data-qa="months"]',
  ano: '[data-qa="years"]',
  newsletter: '#newsletter',
  ofertas: '#optin',
  primeiroNome: '[data-qa="first_name"]',
  sobrenome: '[data-qa="last_name"]',
  empresa: '[data-qa="company"]',
  endereco: '[data-qa="address"]',
  complemento: '[data-qa="address2"]',
  pais: '[data-qa="country"]',
  estado: '[data-qa="state"]',
  cidade: '[data-qa="city"]',
  cep: '[data-qa="zipcode"]',
  celular: '[data-qa="mobile_number"]',
  botaoCriarConta: '[data-qa="create-account"]',

  contaCriada: '[data-qa="account-created"]',
  botaoContinuar: '[data-qa="continue-button"]',
}

function iniciarCadastro(nome, email) {
  cy.get(seletores.nome).type(nome)
  cy.get(seletores.email).type(email)
  cy.get(seletores.botaoSignup).click()
}

function preencherInformacoesDaConta(usuario) {
  cy.get(seletores.tituloSra).check()
  cy.get(seletores.senha).type(usuario.senha)
  cy.get(seletores.dia).select(usuario.diaNascimento)
  cy.get(seletores.mes).select(usuario.mesNascimento)
  cy.get(seletores.ano).select(usuario.anoNascimento)
  cy.get(seletores.newsletter).check()
  cy.get(seletores.ofertas).check()

  cy.get(seletores.primeiroNome).type(usuario.primeiroNome)
  cy.get(seletores.sobrenome).type(usuario.sobrenome)
  cy.get(seletores.empresa).type(usuario.empresa)
  cy.get(seletores.endereco).type(usuario.endereco)
  cy.get(seletores.complemento).type(usuario.complemento)
  cy.get(seletores.pais).select(usuario.pais)
  cy.get(seletores.estado).type(usuario.estado)
  cy.get(seletores.cidade).type(usuario.cidade)
  cy.get(seletores.cep).type(usuario.cep)
  cy.get(seletores.celular).type(usuario.celular)
}

function criarConta() {
  cy.get(seletores.botaoCriarConta).click()
}

// Faz o cadastro completo de uma vez (usado quando o cadastro é só uma etapa do teste)
function cadastrarUsuario(usuario) {
  iniciarCadastro(usuario.nome, usuario.email)
  preencherInformacoesDaConta(usuario)
  criarConta()
}

function continuar() {
  cy.get(seletores.botaoContinuar).click()
}

function validarFormularioDeCadastroVisivel() {
  cy.get(seletores.tituloNovoUsuario)
    .should('be.visible')
    .and('contain', 'New User Signup!')
}

function validarInformacoesDaContaVisivel() {
  cy.contains(seletores.tituloInformacoesDaConta, 'Enter Account Information').should('be.visible')
}

function validarContaCriada() {
  cy.get(seletores.contaCriada)
    .should('be.visible')
    .and('contain', 'Account Created!')
}

function validarEmailJaCadastrado() {
  cy.get(seletores.mensagemErro)
    .should('be.visible')
    .and('contain', 'Email Address already exist!')
}

module.exports = {
  iniciarCadastro,
  preencherInformacoesDaConta,
  criarConta,
  cadastrarUsuario,
  continuar,
  validarFormularioDeCadastroVisivel,
  validarInformacoesDaContaVisivel,
  validarContaCriada,
  validarEmailJaCadastrado,
}
