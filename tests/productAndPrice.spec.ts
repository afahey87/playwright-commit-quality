import { test, expect } from '@playwright/test';


test.describe('Check the product and price', () => {
  test('product and price', async ({ page }) => {
    await page.goto('https://commitquality.com/');
    await page.getByPlaceholder('Filter by product name').click();
    await page.getByPlaceholder('Filter by product name').fill('Product 2');
    await page.getByTestId('filter-button').click();
    await page.getByTestId('product-row-11').getByTestId('name').click();
    await expect(page.getByTestId('product-row-11').getByTestId('price')).toHaveText("15");
    await page.getByTestId('reset-filter-button').click();
    await page.getByTestId('product-row-11').getByTestId('price')
  });
});
