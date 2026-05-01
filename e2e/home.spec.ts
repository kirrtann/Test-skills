import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('loads and shows main heading', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/MediCare Hospital/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('shows stack overview cards', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Cardiology')).toBeVisible();
    await expect(page.getByText('Neurology')).toBeVisible();
  });

  test('navigate to dashboard', async ({ page }) => {
    await page.goto('/');
    // The nav link is hidden on mobile via Tailwind's `hidden md:flex`; use the
    // stable id-based selector with force to cover all viewport sizes.
    await page.locator('#nav-dashboard-link').click({ force: true });
    await expect(page).toHaveURL('/dashboard');
  });
});
