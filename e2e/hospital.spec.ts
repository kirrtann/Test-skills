import { test, expect } from '@playwright/test';

test.describe('Hospital home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/hospital');
  });

  test('loads with main heading', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Hospital Appointment Booking/i })
    ).toBeVisible();
  });

  test('renders appointment form', async ({ page }) => {
    await expect(page.getByPlaceholder('Full name')).toBeVisible();
    await expect(page.getByRole('button', { name: /Request Appointment/i })).toBeVisible();
  });

  test('has links to About and Contact', async ({ page }) => {
    const main = page.locator('main');
    await expect(main.getByRole('link', { name: /About/i })).toBeVisible();
    await expect(main.getByRole('link', { name: /Contact/i })).toBeVisible();
  });

  test('About link navigates to /hospital/about', async ({ page }) => {
    await page.locator('main').getByRole('link', { name: /About/i }).click();
    await expect(page).toHaveURL('/hospital/about');
  });

  test('Contact link navigates to /hospital/contact', async ({ page }) => {
    await page
      .locator('main')
      .getByRole('link', { name: /Contact/i })
      .click();
    await expect(page).toHaveURL('/hospital/contact');
  });
});

test.describe('Hospital About page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/hospital/about');
  });

  test('loads with correct title and heading', async ({ page }) => {
    await expect(page).toHaveTitle(/About Us \| MediCare Hospital/);
    await expect(page.getByRole('heading', { name: /About MediCare Hospital/i })).toBeVisible();
  });

  test('shows hospital stats', async ({ page }) => {
    await expect(page.getByText('1998').first()).toBeVisible();
    await expect(page.getByText('150+').first()).toBeVisible();
    await expect(page.getByText('10K+').first()).toBeVisible();
    await expect(page.getByText('98%').first()).toBeVisible();
  });

  test('shows team members', async ({ page }) => {
    await expect(page.getByText('Dr. Emily Chen')).toBeVisible();
    await expect(page.getByText('Dr. James Wilson')).toBeVisible();
    await expect(page.getByText('Dr. Priya Patel')).toBeVisible();
  });

  test('Book Appointment link navigates to /appointment', async ({ page }) => {
    await page
      .getByRole('link', { name: /Book Appointment/i })
      .first()
      .click();
    await expect(page).toHaveURL('/appointment');
  });
});

test.describe('Hospital Contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/hospital/contact');
  });

  test('loads with correct title and heading', async ({ page }) => {
    await expect(page).toHaveTitle(/MediCare Hospital/);
    await expect(page.getByRole('heading', { name: /Contact Us/i })).toBeVisible();
  });

  test('shows contact details', async ({ page }) => {
    await expect(page.getByText('(555) 123-4567').first()).toBeVisible();
    await expect(page.getByText('info@medicare.example')).toBeVisible();
    await expect(page.getByText('123 Health Avenue', { exact: true })).toBeVisible();
  });

  test('contact form is visible', async ({ page }) => {
    await expect(page.getByPlaceholder('Full Name')).toBeVisible();
    await expect(page.getByPlaceholder('Email Address')).toBeVisible();
    await expect(page.getByPlaceholder('Your message...')).toBeVisible();
    await expect(page.getByRole('button', { name: /Send Message/i })).toBeVisible();
  });

  test('submitting the contact form shows success state', async ({ page }) => {
    await page.getByPlaceholder('Full Name').fill('John Doe');
    await page.getByPlaceholder('Email Address').fill('john@example.com');
    await page.getByPlaceholder('Your message...').fill('Hello, I have a question.');
    await page.locator('select[name="subject"]').selectOption('General Inquiry');
    await page.getByRole('button', { name: /Send Message/i }).click();
    await expect(page.getByText('Message Sent!')).toBeVisible();
  });
});
