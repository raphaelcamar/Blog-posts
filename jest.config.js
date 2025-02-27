module.exports = {
  roots: ['<rootDir>/src'],
  verbose: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    // '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js'
  },
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  // setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.jsx"],
  // resolver: '<rootDir>/.jest/resolver.js',
}
