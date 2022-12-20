import { test, expect } from '@playwright/test';
import { LandingPage} from '../POM/landingPage';
import { LoginPage} from '../POM/loginPage';
const credentials = JSON.parse(JSON.stringify(require("../Fixture/creds.json")));
test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
});

test('Verify Login page is open', async ({ page }) => {
  const landingPage = new LandingPage(page);
  const loginPage = new LoginPage(page);
  await landingPage.elementIsVisible(landingPage.signInButton)
  await landingPage.clickelement(landingPage.signInButton)
  await landingPage.elementIsVisible(loginPage.emailInput)
  await landingPage.elementIsVisible(loginPage.emailInput)
});
test('Verify User is able to login', async ({ page }) => {
  const landingPage = new LandingPage(page);
  const loginPage = new LoginPage(page);
  await landingPage.elementIsVisible(landingPage.signInButton)
  await landingPage.clickelement(landingPage.signInButton)
  await landingPage.elementIsVisible(loginPage.emailInput)
  await landingPage.elementIsVisible(loginPage.emailInput)
  await loginPage.typeInElement(loginPage.emailInput,credentials.email)
  await loginPage.typeInElement(loginPage.passwordInput,credentials.password)
  await landingPage.clickelement(loginPage.signButton)
  await expect(page).toHaveURL('ide/menu/workspaces');
});
