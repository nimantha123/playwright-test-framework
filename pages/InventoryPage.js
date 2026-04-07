class InventoryPage {
  constructor(page) {
    this.page = page;

    // Inventory page
    this.addBackpackToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');

    // Cart and checkout
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });

    // Fill checkout information
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.checkoutErrorMessage = page.locator('[data-test="error"]');

    // Finish checkout
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.successMessage = page.locator('[data-test="complete-header"]');
  }


    //user actions
  async addBackpackToCart() {
    await this.addBackpackToCartButton.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async continueCheckoutWithoutDetails() {
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}

module.exports = InventoryPage;