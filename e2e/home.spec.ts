import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('loads and shows main heading', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/setup-testing/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('shows stack overview cards', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Next.js 14 App Router')).toBeVisible();
    await expect(page.getByText('Tailwind CSS', { exact: true })).toBeVisible();
  });

  test('navigate to dashboard', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('link', { name: /dashboard/i })
      .first()
      .click();
    await expect(page).toHaveURL('/dashboard');
  });
});
