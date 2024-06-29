const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  collectCoverageFrom: ['./src/**/*.{ts,js,tsx,jsx}'],
  // moduleNameMapper: {
  //   '^d3-scale-chromatic$': `${__dirname}/node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.min.js`,
  //   '^d3-interpolate$': `${__dirname}/node_modules/d3-interpolate/dist/d3-interpolate.min.js`,
  //   '^d3-color$': `${__dirname}/node_modules/d3-color/dist/d3-color.min.js`,
  // },
  setupFilesAfterEnv: [`${__dirname}/jest.setup.ts`],
};
