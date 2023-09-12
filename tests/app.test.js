const { test, expect } = require('@playwright/test');

test('Should load table when click button', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await page.click('.btn');
  await page.waitForSelector('.table');
  await expect(page.locator('.table')).toBeVisible();
});
