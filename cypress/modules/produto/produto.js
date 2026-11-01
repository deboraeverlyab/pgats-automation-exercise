const seletores = {
  tituloDaLista: '.features_items .title',
  produtos: '.features_items .product-image-wrapper',
  nomesDosProdutos: '.features_items .productinfo p',
  verPrimeiroProduto: 'a[href="/product_details/1"]',
  campoPesquisa: '#search_product',
  botaoPesquisar: '#submit_search',
  detalhesDoProduto: '.product-information',
}

function acessarDetalhesDoPrimeiroProduto() {
  cy.get(seletores.verPrimeiroProduto).click()
}

function pesquisarProduto(termo) {
  cy.get(seletores.campoPesquisa).type(termo)
  cy.get(seletores.botaoPesquisar).click()
}

function validarPaginaDeTodosOsProdutos() {
  cy.url().should('include', '/products')
  cy.get(seletores.tituloDaLista)
    .should('be.visible')
    .and('contain', 'All Products')
}

function validarListaDeProdutosVisivel() {
  cy.get(seletores.produtos).first().should('be.visible')
}

function validarDetalhesDoProduto() {
  cy.url().should('include', '/product_details/1')
  cy.get(seletores.detalhesDoProduto)
    .should('be.visible')
    .and('contain', 'Blue Top')
    .and('contain', 'Category:')
    .and('contain', 'Rs.')
    .and('contain', 'Availability:')
    .and('contain', 'Condition:')
    .and('contain', 'Brand:')
}

function validarProdutosPesquisados(termo) {
  cy.get(seletores.tituloDaLista)
    .should('be.visible')
    .and('contain', 'Searched Products')

  // Confere se cada produto encontrado tem o termo pesquisado no nome
  cy.get(seletores.nomesDosProdutos).each((produto) => {
    cy.wrap(produto).should('be.visible').and('contain', termo)
  })
}

module.exports = {
  acessarDetalhesDoPrimeiroProduto,
  pesquisarProduto,
  validarPaginaDeTodosOsProdutos,
  validarListaDeProdutosVisivel,
  validarDetalhesDoProduto,
  validarProdutosPesquisados,
}
