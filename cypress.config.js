const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    video: false,

    // Se um teste falhar por instabilidade do site, o Cypress tenta mais 2 vezes (só no "cypress run")
    retries: {
      runMode: 2,
      openMode: 0,
    },

    // Bloqueia os anúncios do site, que deixam a página lenta e às vezes cobrem a tela
    blockHosts: [
      '*.googlesyndication.com',
      '*.doubleclick.net',
      '*.google-analytics.com',
      '*.googletagmanager.com',
    ],

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },

  // Relatório em HTML gerado em cypress/reports
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportPageTitle: 'PGATS - Automation Exercise',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
})
