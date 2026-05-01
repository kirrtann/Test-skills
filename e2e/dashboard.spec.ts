import { test, expect } from '@playwright/test';

test.describe('Dashboard page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard');
  });

  test('loads with correct title and heading', async ({ page }) => {
    await expect(page).toHaveTitle(/Dashboard \| MediCare Hospital/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('shows all four stat cards', async ({ page }) => {
    await expect(page.getByText('Total Patients')).toBeVisible();
    await expect(page.getByText("Today's Appointments")).toBeVisible();
    await expect(page.getByText('Available Doctors')).toBeVisible();
    await expect(page.getByText('Monthly Revenue')).toBeVisible();
  });

  test('shows recent appointments section', async ({ page }) => {
    await expect(page.getByText('Sarah Johnson')).toBeVisible();
    await expect(page.getByText('Michael Brown')).toBeVisible();
  });

  test('has a link to book appointment', async ({ page }) => {
    const bookLink = page.getByRole('link', { name: /book appointment|new appointment/i }).first();
    await expect(bookLink).toBeVisible();
  });
});
