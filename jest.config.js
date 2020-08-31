module.exports = {
  preset: 'jest-puppeteer',
  testMatch: [
    '**/tests/**/*.test.ts'
  ],
  transform: {
		"^.+\\.ts?$": "ts-jest"
  },
  moduleNameMapper: {
    '^tests/(.*)$': '<rootDir>/tests/$1',
  },
  rootDir: './src',
  verbose: true
};