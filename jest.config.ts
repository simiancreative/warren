import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  collectCoverage: true,
  coverageReporters: ['json'],
};
