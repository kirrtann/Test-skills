import { test, expect } from '@playwright/test';

test.describe('Appointment page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/appointment');
  });

  test('loads with correct title and heading', async ({ page }) => {
    await expect(page).toHaveTitle(/Book Appointment \| MediCare Hospital/);
    await expect(page.getByRole('heading', { name: /Book an Appointment/i })).toBeVisible();
  });

  test('shows how-it-works steps', async ({ page }) => {
    await expect(page.getByText('Fill the Form')).toBeVisible();
    await expect(page.getByText('Get Confirmed')).toBeVisible();
    await expect(page.getByText('Visit Us')).toBeVisible();
  });

  test('renders the appointment form fields', async ({ page }) => {
    await expect(page.getByPlaceholder('Full name')).toBeVisible();
    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await expect(page.getByPlaceholder('Phone')).toBeVisible();
    await expect(page.locator('select[name="department"]')).toBeVisible();
    await expect(page.getByRole('button', { name: /Request Appointment/i })).toBeVisible();
  });

  test('shows upcoming appointments list', async ({ page }) => {
    await expect(page.getByText('John Smith')).toBeVisible();
    await expect(page.getByText('Alice Park')).toBeVisible();
  });

  test('form can be filled and submitted', async ({ page }) => {
    await page.getByPlaceholder('Full name').fill('Jane Doe');
    await page.getByPlaceholder('Email').fill('jane@example.com');
    await page.getByPlaceholder('Phone').fill('5551234567');
    await page.locator('select[name="department"]').selectOption('Cardiology');

    // AppointmentForm uses alert on submit — dismiss it
    page.once('dialog', (dialog) => dialog.dismiss());
    await page.getByRole('button', { name: /Request Appointment/i }).click();
  });
});
