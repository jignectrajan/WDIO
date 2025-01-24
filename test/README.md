# android-automation-template
This project is an Web UI Automation Framework template using WebDriverIO, Mocha framework, and Allure reporting. It is structured for end-to-end testing of web applications, with support for advanced capabilities like parallel test execution, robust reporting, and flexible configurations.

Setup:
Once you have cloned or downloaded this project, install all necessary dependencies by running:
- npm i 
This command reinstalls all required node_modules based on the dependencies specified in package.json.
-----------------------------------

Commands for Running Tests and Generating Reports
You can customize commands to run tests, generate reports, or perform cleanup operations by defining them in the scripts section of the package.json file. Below are the commands you can add:
  "scripts": {
    "wdio": "wdio run ./test/config/wdio.browser.conf.js",
    "allure-report": "npx allure generate \"./allure-results\" --clean && npx allure open",
    "android.remove.allure.dir": "rmdir /s /q allure-results && rmdir /s /q allure-report"
  },

Running Tests:
You can run the test scripts in two ways:

1. Specifying the Test File in the Configuration
Update the specs attribute in your wdio.browser.conf.js file to specify the test file you want to run. For example:

specs: [
        './test/specs/**/loginTests.e2e.js'
],

After updating the specs attribute, run the following command to execute the test:
- npm run wdio

2. Specifying the Test File at Runtime from the Command Line
Alternatively, you can specify the test file directly from the command line without modifying the configuration file. Use the following command, replacing path/to/your/test.feature with the path to the feature file you want to run:
- npx wdio run ./wdio.shared.conf.js --spec path/to/your/test.feature
-----------------------------------

Generate and Open Allure Report
- npm run allure-report

Viewing & removing Allure Reports

1. Generate and Open the Allure Report: After test execution, run the following command to generate and open the Allure report:
- npm run allure-report

2. Remove Old Allure Directories: To remove existing Allure results and report directories before running new tests, use:
- npm run android.remove.allure.dir
-----------------------------------