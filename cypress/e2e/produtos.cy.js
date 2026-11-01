/// <reference types="cypress" />

const home = require('../modules/home/home')
const menu = require('../modules/menu/menu')
const produto = require('../modules/produto/produto')
const produtos = require('../fixtures/produtos.json')

describe('Produtos', () => {
  beforeEach(() => {
    home.acessarHome()
    home.validarHomeVisivel()
    menu.irParaProdutos()
    produto.validarPaginaDeTodosOsProdutos()
  })

  it('Test Case 8: Verify All Products and product detail page', () => {
    produto.validarListaDeProdutosVisivel()

    produto.acessarDetalhesDoPrimeiroProduto()
    produto.validarDetalhesDoProduto()
  })

  it('Test Case 9: Search Product', () => {
    produto.pesquisarProduto(produtos.termoDePesquisa)
    produto.validarProdutosPesquisados(produtos.termoDePesquisa)
  })
})
