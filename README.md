# TO DO app Cypress E2E Testing
## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Cypress Support](https://on.cypress.io/support)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/installing-cypress)

### 2. Setup and Running Cypress tests

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-phonecat.git

## cd into the cloned repo
cd cypress-example-phonecat

## install the node_modules
npm install

## running the test using ui
npx cypress open
## follow the instructions

## running the test from cli
node_modules/.bin/cypress run --spec "cypress/e2e/spec.cy.js"
```

