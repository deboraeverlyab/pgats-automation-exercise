/// <reference types="cypress" />

const home = require('../modules/home/home')
const assinatura = require('../modules/assinatura/assinatura')

describe('Assinatura da newsletter', () => {
  it('Test Case 10: Verify Subscription in home page', () => {
    home.acessarHome()
    home.validarHomeVisivel()

    assinatura.rolarAteORodape()
    assinatura.validarSecaoDeAssinaturaVisivel()

    assinatura.assinarNewsletter(`pgats-aut-${Date.now()}@mail.com`)
    assinatura.validarAssinaturaRealizada()
  })
})
