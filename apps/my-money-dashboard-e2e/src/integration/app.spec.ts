import { getGreeting } from '../support/app.po';

describe('my-money-dashboard', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to my-money-dashboard!');
  });
});
