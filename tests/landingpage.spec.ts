import { test, expect } from '@playwright/test';
import { LandingPage} from '../POM/landingPage';

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
});

test('Verify Landing page is opening', async ({ page }) => {
  const landingPage = new LandingPage(page);
  await landingPage.elementIsVisible(landingPage.signInButton)
});

