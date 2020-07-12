module.exports = {
    testMatch: [
      '**/*.test.js',
    ],
    setupFilesAfterEnv: ['jest-allure/dist/setup'],
    reporters: [
      'default',
      // 'jest-allure',
      [ 'jest-junit', {
          verbose: true,
          outputDirectory: '../test-results/js-code',
          outputName: 'junit.xml',
      } ],
    ],
  };
  