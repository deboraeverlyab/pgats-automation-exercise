/// <reference types="cypress" />

const home = require('../modules/home/home')
const menu = require('../modules/menu/menu')
const login = require('../modules/login/login')
const cadastro = require('../modules/cadastro/cadastro')
const conta = require('../modules/conta/conta')
const usuario = require('../fixtures/usuario.json')
const credenciais = require('../fixtures/credenciais.json')

describe('Login e logout de usuário', () => {
  beforeEach(() => {
    usuario.email = `pgats-aut-${Date.now()}@mail.com`

    home.acessarHome()
    home.validarHomeVisivel()
    menu.irParaSignupLogin()
    login.validarFormularioDeLoginVisivel()
  })

  it('Test Case 2: Login User with correct email and password', () => {
    // Pré-condição: ter um usuário cadastrado
    cadastro.cadastrarUsuario(usuario)
    cadastro.continuar()
    menu.efetuarLogout()

    login.efetuarLogin(usuario.email, usuario.senha)
    menu.validarUsuarioLogado(usuario.nome)

    menu.excluirConta()
    conta.validarContaExcluida()
  })

  it('Test Case 3: Login User with incorrect email and password', () => {
    login.efetuarLogin(credenciais.invalidas.email, credenciais.invalidas.senha)
    login.validarMensagemDeErro()
  })

  it('Test Case 4: Logout User', () => {
    // Pré-condição: ter um usuário cadastrado
    cadastro.cadastrarUsuario(usuario)
    cadastro.continuar()
    menu.efetuarLogout()

    login.efetuarLogin(usuario.email, usuario.senha)
    menu.validarUsuarioLogado(usuario.nome)

    menu.efetuarLogout()
    login.validarPaginaDeLogin()
  })
})
