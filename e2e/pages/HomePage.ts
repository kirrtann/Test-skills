import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly dashboardLink: Locator;
  readonly docsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { level: 1 });
    this.dashboardLink = page.getByRole('link', { name: /dashboard/i }).first();
    this.docsLink = page.getByRole('link', { name: /documentation/i });
  }

  async goto() {
    await this.page.goto('/');
  }
}
