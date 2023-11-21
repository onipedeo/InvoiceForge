module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },

  moduleNameMapper: {
    // Map the package name to the actual path of the package
    '^yup$': 'yup',
    '^knex$': 'knex',
  },
};
