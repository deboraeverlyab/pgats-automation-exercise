# PGATS - Automação E2E do Automation Exercise

Trabalho de conclusão da pós-graduação PGATS.
Aluna: **Débora Everly**

Testes automatizados com [Cypress](https://www.cypress.io/) no site [Automation Exercise](https://automationexercise.com), cobrindo os casos de teste **1, 2, 3, 4, 5, 8, 9, 10, 15 e 16** da página [Test Cases](https://automationexercise.com/test_cases).

## Casos de teste

| Caso | Descrição | Spec |
|---|---|---|
| 1 | Register User | `cadastro.cy.js` |
| 2 | Login User with correct email and password | `login.cy.js` |
| 3 | Login User with incorrect email and password | `login.cy.js` |
| 4 | Logout User | `login.cy.js` |
| 5 | Register User with existing email | `cadastro.cy.js` |
| 8 | Verify All Products and product detail page | `produtos.cy.js` |
| 9 | Search Product | `produtos.cy.js` |
| 10 | Verify Subscription in home page | `assinatura.cy.js` |
| 15 | Place Order: Register before Checkout | `pedido.cy.js` |
| 16 | Place Order: Login before Checkout | `pedido.cy.js` |

## Estrutura

```
.github/workflows/cypress.yml   → execução no GitHub Actions
cypress/
├── e2e/        → specs (os cenários de teste)
├── modules/    → ações de negócio, com seletores e validações
├── fixtures/   → dados usados nos testes
└── support/    → configuração geral
cypress.config.js
```

## Como o projeto foi organizado

- As **specs** só descrevem os passos do cenário, chamando funções dos módulos.
- Cada **módulo** (`modules/login`, `modules/cadastro`, `modules/pedido`...) guarda os seletores numa constante `seletores` e tem as funções de ação e de validação.
- Os **seletores** usam principalmente os atributos `data-qa` e `id` do site.
- Os **dados** (usuário, pagamento, produtos) ficam em `fixtures/`.
- O e-mail do usuário muda a cada teste (`Date.now()`), para não dar conflito com cadastros anteriores.
- Quando o caso de teste precisa de um usuário já cadastrado (casos 2, 4, 5 e 16), o próprio teste faz o cadastro antes, como pré-condição.
- No `cypress.config.js`, os anúncios do site são bloqueados e o Cypress tenta de novo até 2 vezes se algum teste falhar por instabilidade do site.

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

Instalar as dependências:

```bash
npm install
```

Rodar todos os testes:

```bash
npm test
```

Abrir a interface do Cypress:

```bash
npm run cy:open
```

## Relatório

O relatório em HTML é gerado com o [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) em `cypress/reports/index.html` ao final da execução.

## GitHub Actions

Os testes rodam automaticamente a cada `push` na branch `main`, e também podem ser executados manualmente pela aba **Actions** (botão *Run workflow*). O relatório fica disponível para download no final da execução, com o nome `relatorio-cypress`.

## Observação

Nos casos 15 e 16, a mensagem "Your order has been placed successfully!" aparece muito rápido e logo o site muda de página. Por isso, a confirmação do pedido é feita na página seguinte, que mostra "Order Placed!" e "Congratulations! Your order has been confirmed!".
