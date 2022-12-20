import { expect } from "@playwright/test";
const { Page } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  emailInput= this.page.locator('[id=email-signin]')
  passwordInput= this.page.locator('[id=password-signin]')
  signButton= this.page.locator('[id=signin-commit-button]')
  constructor(public readonly page: Page) { }

  async typeInElement(ele,data){
    await ele.type(data,{delay: 100});
  }
}
