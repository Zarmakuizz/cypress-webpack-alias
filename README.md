# Test Repo: let Cypress recognize Webpack aliases

The project currently doesn't work.

## The challenge

Cypress 10 now allows to test Components directly. To do an Integration test, we can say.

The file `cypress/component/Title.cy.js` tries to import a Component from the solution and load it. However, `src/components/Title.cy.js` takes advantage of [Webpack aliases](https://webpack.js.org/configuration/resolve/): 
- Cypress' test file should be able to import '@Components/Title', instead of relying on absolute or relative paths 
- The Title Component file imports from the helpers, using another alias too.

Expected result: 
- Importing the Component file should work 
- Imports defined in the Component file should also work

## Current status

Webpack aliases are not recognized at all. Cypress can't import the Component file into the test.


# Licensing

See LICENSE.md