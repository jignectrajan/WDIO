import config from './wdio.shared.local.conf.js';
import path from 'path'

// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/**/*.e2e.js')
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // Specify browser capabilities
    maxInstances: 2,
    browserName: 'chrome', // Specify the browser you want to use
    // 'wdio:chromeOptions': {
    //   args: ['--no-sandbox', '--disable-dev-shm-usage'], // Add any additional Chrome options here
    // },
  },
];

config.baseUrl = 'https://www.saucedemo.com/';

export { config };
