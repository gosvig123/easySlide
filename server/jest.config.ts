// jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  restoreMocks: true,
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
