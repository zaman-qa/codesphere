import { expect } from "@playwright/test";
const { Page } = require('@playwright/test');

exports.LandingPage = class LandingPage {

  signInButton= this.page.locator('[id=navbar-signin]')
  constructor(public readonly page: Page) { }

  async elementIsVisible(ele){
    await expect(ele).toBeVisible();
  }
  async clickelement(ele) {
    await ele.click();
  }
}
