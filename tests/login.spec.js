const { test, expect } = require('../fixtures/testFixtures');
const users = require('../test-data/users');

test.describe('Login Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('should login successfully with valid credentials', async ({ loginPage, page }) => {
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );

    await expect(page).toHaveURL(/.*inventory\.html/);
  });

  test('should show an error for invalid credentials', async ({ loginPage }) => {
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match any user in this service');
  });

  test('should show an error when credentials are empty', async ({ loginPage }) => {
    await loginPage.login('', '');

    await expect(loginPage.errorMessage)
      .toContainText('Username is required');
  });
});