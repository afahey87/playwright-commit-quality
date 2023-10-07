import { test, expect } from '@playwright/test';


test.describe('Check the product and price', () => {
  test('product and price', async ({ page }) => {
    await page.goto('https://commitquality.com/');

    // Click the filter button
    await page.getByPlaceholder('Filter by product name').click();

    // filter by product 2
    await page.getByPlaceholder('Filter by product name').fill('Product 2');
    await page.getByTestId('filter-button').click();

    // Expect Product 2 to have a price of 15
    await expect(page.getByTestId('product-row-11').getByTestId('price')).toHaveText("15");

    // Reset the filter
    await page.getByTestId('reset-filter-button').click();
  });
});
