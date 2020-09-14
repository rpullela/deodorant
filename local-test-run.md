### <font color="red">Note: Please make sure to run web build before running all tests </font>

### Run Lighthouse results:

a. install plugin

> yarn global add @lhci/cli@0.4.x

b. run the lighthouse using autorun

> lhci autorun --config=packages/lighthouse-tests/lighthouserc.json

lighthousers.json contains configuration related to lighthouse results and can be modified as per need

### Run Structured Data test:

a. Install plugin globally using -

> yarn global add structured-data-testing-tool

b. Run the test on any url-

> sdtt --url <<URL_PATH>> --schemas "jsonld:Article" -p Twitter -p
> Facebook --presets SocialMedia -i

### Run Accessibility tests:

a. Install pa11y plugin and report converter:

> yarn global add pa11y-ci
> yarn global add pa11y-ci-reporter-html

b. Run the pa11y plugin from sitemap , and can replace host using below command for run locally \*\*eg: URL_PATH=http://localhost:8000

> pa11y-ci --sitemap https://liberty-portal.netlify.app/sitemap.xml --sitemap-find https://liberty-portal.netlify.app --sitemap-replace http://localhost:8000 --json > pa11y-ci-results.json

c. If you want your results to appear in the terminal:

> pa11y-ci --sitemap https://liberty-portal.netlify.app/sitemap.xml --sitemap-find https://liberty-portal.netlify.app --sitemap-replace http://localhost:8000

d. generate html report from json generated in previous step:

> pa11y-ci-reporter-html -s pa11y-ci-results.json -d pa11yresult.html

Copy path of pa11yresult.html and input into browser to see pa11y results. Click on the first option (index) to see all the pages, including errors, warnings and notices.

### Run Cypress Tests:

1. Using Desktop Application, download from this path https://download.cypress.io/desktop

2. Update these two lines in the cypress.json to run locally (don't push these changes up or the CI cyress run will not work):
   "integrationFolder": "packages/cypress-tests",
   "baseUrl": "http://localhost:8000/",

3. import the project and run the test as per need

#### note: before running cypress desktop app make sure that cypress.json containes valid base url & should be in working mode.

2. Using CLI
   A. Install cypress at the project root path:

   > yarn add cypress --dev -W

   B. configure the cypress.json as per need, like changing base-url specific to local or any host
   C. Run Cypress using spec file

   > cypress run --config-file cypress.json --spec "packages/cypress-tests/\*"

   D. create a public directory

   > mkdir public
   > cp -r cypress/videos public/videos

   E. convert the generated json to html file
   i. merge all the generated json into one:

   > yarn start report:merge

   ii. generate an output html file:

   > yarn start report:generate

   F. View the index.html file in public folder
