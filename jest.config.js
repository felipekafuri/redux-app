module.exports = {
  testIgnorePatterns: [
    "/node_modules/", "/public/"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/setupTests.ts'
  ],
  testEnvironment: 'jsdom'
}