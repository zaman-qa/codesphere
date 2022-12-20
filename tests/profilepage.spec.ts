import { test, expect } from '@playwright/test';
import { LandingPage} from '../POM/landingPage';
import { LoginPage} from '../POM/loginPage';
import { ProfilePage} from '../POM/ProfilePage';
const credentials = JSON.parse(JSON.stringify(require("../Fixture/creds.json")));
test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
});

// test('Verify User is able to open profile', async ({ page }) => {
//   const landingPage = new LandingPage(page);
//   const loginPage = new LoginPage(page);
//   const profilePage = new ProfilePage(page);
//   await landingPage.elementIsVisible(landingPage.signInButton)
//   await landingPage.clickelement(landingPage.signInButton)
//   await landingPage.elementIsVisible(loginPage.emailInput)
//   await landingPage.elementIsVisible(loginPage.emailInput)
//   await loginPage.typeInElement(loginPage.emailInput,credentials.email)
//   await loginPage.typeInElement(loginPage.passwordInput,credentials.password)
//   await landingPage.clickelement(loginPage.signButton)
//   await expect(page).toHaveURL('ide/menu/workspaces');
//   await landingPage.elementIsVisible(profilePage.profile)
//   await landingPage.clickelement(profilePage.profile);
//   await landingPage.elementIsVisible(profilePage.myProfile)
//   await landingPage.clickelement(profilePage.myProfile);
//   await landingPage.elementIsVisible(profilePage.firstName)
// });
// test('Verify User is able see error on entering the same email', async ({ page }) => {
//   const landingPage = new LandingPage(page);
//   const loginPage = new LoginPage(page);
//   const profilePage = new ProfilePage(page);
//   await landingPage.elementIsVisible(landingPage.signInButton)
//   await landingPage.clickelement(landingPage.signInButton)
//   await landingPage.elementIsVisible(loginPage.emailInput)
//   await landingPage.elementIsVisible(loginPage.emailInput)
//   await loginPage.typeInElement(loginPage.emailInput,credentials.email)
//   await loginPage.typeInElement(loginPage.passwordInput,credentials.password)
//   await landingPage.clickelement(loginPage.signButton)
//   await expect(page).toHaveURL('ide/menu/workspaces')
//   await landingPage.elementIsVisible(profilePage.profile)
//   await landingPage.clickelement(profilePage.profile)
//   await landingPage.elementIsVisible(profilePage.myProfile)
//   await landingPage.clickelement(profilePage.myProfile)
//   await landingPage.elementIsVisible(profilePage.changeEmail)
//   await landingPage.clickelement(profilePage.changeEmail)
//   await landingPage.elementIsVisible(profilePage.newEmail)
//   await loginPage.typeInElement(profilePage.newEmail,credentials.email)
//   await landingPage.elementIsVisible(profilePage.password)
//   await loginPage.typeInElement(profilePage.password,credentials.password)
//   await landingPage.elementIsVisible(profilePage.updateSubmit)
//   await landingPage.clickelement(profilePage.updateSubmit)
//   await landingPage.elementIsVisible(profilePage.errorMsg)
// });
test('Verify User is able to update first and last name', async ({ page }) => {
  const landingPage = new LandingPage(page);
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);
  await landingPage.elementIsVisible(landingPage.signInButton)
  await landingPage.clickelement(landingPage.signInButton)
  await landingPage.elementIsVisible(loginPage.emailInput)
  await landingPage.elementIsVisible(loginPage.emailInput)
  await loginPage.typeInElement(loginPage.emailInput,credentials.email)
  await loginPage.typeInElement(loginPage.passwordInput,credentials.password)
  await landingPage.clickelement(loginPage.signButton)
  await expect(page).toHaveURL('ide/menu/workspaces')
  await landingPage.elementIsVisible(profilePage.profile)
  await landingPage.clickelement(profilePage.profile)
  await landingPage.elementIsVisible(profilePage.myProfile)
  await landingPage.clickelement(profilePage.myProfile)
  await landingPage.elementIsVisible(profilePage.firstName)
  let firstName: string = 'Abu '+Math.floor(Math.random() * 10)
  await profilePage.firstName.clear();
  await loginPage.typeInElement(profilePage.firstName,firstName)
  let lastName: string = 'Bakar '+Math.floor(Math.random() * 10)
  await landingPage.elementIsVisible(profilePage.lastName)
  await profilePage.lastName.clear();
  await loginPage.typeInElement(profilePage.lastName,lastName)
  await landingPage.elementIsVisible(profilePage.updateButton)
  await landingPage.clickelement(profilePage.updateButton)
});
