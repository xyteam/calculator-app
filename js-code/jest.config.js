module.exports = {
    testMatch: [
      '**/*.test.js',
    ],
    reporters: [
      'default',
      [ 'jest-junit', {
        verbose: true,
        outputDirectory: '../test-results',
        outputName: 'js-code/junit.xml',
      } ]
    ]
  };
  