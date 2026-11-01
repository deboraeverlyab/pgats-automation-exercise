/// <reference types="cypress" />

const home = require('../modules/home/home')
const menu = require('../modules/menu/menu')
const login = require('../modules/login/login')
const cadastro = require('../modules/cadastro/cadastro')
const conta = require('../modules/conta/conta')
const usuario = require('../fixtures/usuario.json')

describe('Cadastro de usuário', () => {
  beforeEach(() => {
    // E-mail diferente a cada teste, para não repetir um e-mail já cadastrado
    usuario.email = `pgats-aut-${Date.now()}@mail.com`
  })

  it('Test Case 1: Register User', () => {
    home.acessarHome()
    home.validarHomeVisivel()
    menu.irParaSignupLogin()
    cadastro.validarFormularioDeCadastroVisivel()

    cadastro.iniciarCadastro(usuario.nome, usuario.email)
    cadastro.validarInformacoesDaContaVisivel()

    cadastro.preencherInformacoesDaConta(usuario)
    cadastro.criarConta()
    cadastro.validarContaCriada()

    cadastro.continuar()
    menu.validarUsuarioLogado(usuario.nome)

    menu.excluirConta()
    conta.validarContaExcluida()
    conta.continuar()
  })

  it('Test Case 5: Register User with existing email', () => {
    // Pré-condição: ter um usuário cadastrado
    login.acessarLogin()
    cadastro.cadastrarUsuario(usuario)
    cadastro.continuar()
    menu.efetuarLogout()

    home.acessarHome()
    home.validarHomeVisivel()
    menu.irParaSignupLogin()
    cadastro.validarFormularioDeCadastroVisivel()

    cadastro.iniciarCadastro(usuario.nome, usuario.email)
    cadastro.validarEmailJaCadastrado()
  })
})
