const seletores = {
  primeiroProduto: '.productinfo a[data-product-id="1"]',
  segundoProduto: '.productinfo a[data-product-id="2"]',
  botaoContinuarComprando: '.close-modal',
  tabelaDoCarrinho: '#cart_info_table',
  botaoFinalizar: '#do_action .check_out',
}

function adicionarProdutosAoCarrinho() {
  cy.get(seletores.primeiroProduto).click()
  cy.get(seletores.botaoContinuarComprando).click()
  cy.get(seletores.segundoProduto).click()
  cy.get(seletores.botaoContinuarComprando).click()
}

function prosseguirParaCheckout() {
  cy.get(seletores.botaoFinalizar).click()
}

function validarCarrinhoVisivel(produtos) {
  cy.url().should('include', '/view_cart')
  cy.get(seletores.tabelaDoCarrinho)
    .should('be.visible')
    .and('contain', produtos[0])
    .and('contain', produtos[1])
}

module.exports = {
  adicionarProdutosAoCarrinho,
  prosseguirParaCheckout,
  validarCarrinhoVisivel,
}
