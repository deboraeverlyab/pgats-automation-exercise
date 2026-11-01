import 'cypress-mochawesome-reporter/register'

// Scripts de terceiros do site lançam erros que não têm relação com os testes
Cypress.on('uncaught:exception', () => false)
