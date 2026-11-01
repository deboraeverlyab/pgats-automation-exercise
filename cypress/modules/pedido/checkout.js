const seletores = {
  enderecoDeEntrega: '#address_delivery',
  enderecoDeCobranca: '#address_invoice',
  resumoDoPedido: '#cart_info',
  comentario: 'textarea[name="message"]',
  botaoFazerPedido: 'a[href="/payment"]',

  nomeNoCartao: '[data-qa="name-on-card"]',
  numeroDoCartao: '[data-qa="card-number"]',
  cvc: '[data-qa="cvc"]',
  mesValidade: '[data-qa="expiry-month"]',
  anoValidade: '[data-qa="expiry-year"]',
  botaoPagar: '[data-qa="pay-button"]',

  pedidoRealizado: '[data-qa="order-placed"]',
  areaDoPedidoRealizado: '#form',
}

function validarDetalhesDoEnderecoEPedido(usuario, produtos) {
  cy.get(seletores.enderecoDeEntrega)
    .should('be.visible')
    .and('contain', usuario.primeiroNome + ' ' + usuario.sobrenome)
    .and('contain', usuario.endereco)
    .and('contain', usuario.cidade)
    .and('contain', usuario.pais)
    .and('contain', usuario.celular)

  cy.get(seletores.enderecoDeCobranca)
    .should('be.visible')
    .and('contain', usuario.primeiroNome + ' ' + usuario.sobrenome)
    .and('contain', usuario.endereco)

  cy.get(seletores.resumoDoPedido)
    .should('be.visible')
    .and('contain', produtos[0])
    .and('contain', produtos[1])
}

function fazerPedido(comentario) {
  cy.get(seletores.comentario).type(comentario)
  cy.get(seletores.botaoFazerPedido).click()
}

function pagarEConfirmarPedido(pagamento) {
  cy.get(seletores.nomeNoCartao).type(pagamento.nomeNoCartao)
  cy.get(seletores.numeroDoCartao).type(pagamento.numeroDoCartao)
  cy.get(seletores.cvc).type(pagamento.cvc)
  cy.get(seletores.mesValidade).type(pagamento.mesValidade)
  cy.get(seletores.anoValidade).type(pagamento.anoValidade)
  cy.get(seletores.botaoPagar).click()
}

// A mensagem "Your order has been placed successfully!" some muito rápido,
// por isso confiro a página de pedido confirmado que aparece logo depois
function validarPedidoRealizado() {
  cy.get(seletores.pedidoRealizado)
    .should('be.visible')
    .and('contain', 'Order Placed!')
  cy.get(seletores.areaDoPedidoRealizado).should('contain', 'Congratulations! Your order has been confirmed!')
}

module.exports = {
  validarDetalhesDoEnderecoEPedido,
  fazerPedido,
  pagarEConfirmarPedido,
  validarPedidoRealizado,
}
