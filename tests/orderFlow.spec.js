const { test, expect } = require('../fixtures/testFixtures');
const users = require('../test-data/users');

test.describe('Order Flow Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );
  });

  test('should complete the order flow successfully', async ({ inventoryPage }) => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await inventoryPage.clickCheckout();
    await inventoryPage.fillCheckoutDetails('Nimantha', 'Jaya', '10200');
    await inventoryPage.finishOrder();

    await expect(inventoryPage.successMessage)
      .toHaveText('Thank you for your order!');
  });

  test('should show an error when checkout details are empty', async ({ inventoryPage }) => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await inventoryPage.clickCheckout();
    await inventoryPage.continueCheckoutWithoutDetails();

    await expect(inventoryPage.checkoutErrorMessage)
      .toContainText('Error: First Name is required');
  });
});