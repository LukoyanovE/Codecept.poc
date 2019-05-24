exports.config = {
  tests: 'e2e/tests/*.ts',
  output: 'e2e/output',
  require: ['ts-node/register'],
  helpers: {
    Protractor: {
      url: 'http://localhost:8080',
      driver: 'local',
      browser: 'chrome',
      fullPageScreenshots: true,
      directConnect: true,
      seleniumAddress: undefined,
      useAllAngular2AppRoots: true,
      smartWait: 5000,
    }
  },
  include: {
    I: './e2e/step_file.js'
  },
  helpers: {
    MyHelper: {
      require: './e2e/helpers/my_helper.ts',
    },
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept_test'
}