/// <reference types="cypress" />

const home = require('../modules/home/home')
const menu = require('../modules/menu/menu')
const login = require('../modules/login/login')
const cadastro = require('../modules/cadastro/cadastro')
const conta = require('../modules/conta/conta')
const carrinho = require('../modules/carrinho/carrinho')
const checkout = require('../modules/pedido/checkout')
const usuario = require('../fixtures/usuario.json')
const pedido = require('../fixtures/pedido.json')
const pagamento = require('../fixtures/pagamento.json')

describe('Realização de pedido', () => {
  beforeEach(() => {
    usuario.email = `pgats-aut-${Date.now()}@mail.com`
  })

  it('Test Case 15: Place Order: Register before Checkout', () => {
    home.acessarHome()
    home.validarHomeVisivel()
    menu.irParaSignupLogin()

    cadastro.cadastrarUsuario(usuario)
    cadastro.validarContaCriada()
    cadastro.continuar()
    menu.validarUsuarioLogado(usuario.nome)

    menu.irParaProdutos()
    carrinho.adicionarProdutosAoCarrinho()
    menu.irParaCarrinho()
    carrinho.validarCarrinhoVisivel(pedido.produtos)

    carrinho.prosseguirParaCheckout()
    checkout.validarDetalhesDoEnderecoEPedido(usuario, pedido.produtos)

    checkout.fazerPedido(pedido.comentario)
    checkout.pagarEConfirmarPedido(pagamento)
    checkout.validarPedidoRealizado()

    menu.excluirConta()
    conta.validarContaExcluida()
    conta.continuar()
  })

  it('Test Case 16: Place Order: Login before Checkout', () => {
    // Pré-condição: ter um usuário cadastrado
    login.acessarLogin()
    cadastro.cadastrarUsuario(usuario)
    cadastro.continuar()
    menu.efetuarLogout()

    home.acessarHome()
    home.validarHomeVisivel()
    menu.irParaSignupLogin()

    login.efetuarLogin(usuario.email, usuario.senha)
    menu.validarUsuarioLogado(usuario.nome)

    menu.irParaProdutos()
    carrinho.adicionarProdutosAoCarrinho()
    menu.irParaCarrinho()
    carrinho.validarCarrinhoVisivel(pedido.produtos)

    carrinho.prosseguirParaCheckout()
    checkout.validarDetalhesDoEnderecoEPedido(usuario, pedido.produtos)

    checkout.fazerPedido(pedido.comentario)
    checkout.pagarEConfirmarPedido(pagamento)
    checkout.validarPedidoRealizado()

    menu.excluirConta()
    conta.validarContaExcluida()
    conta.continuar()
  })
})
