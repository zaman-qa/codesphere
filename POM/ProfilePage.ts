import { expect } from "@playwright/test";
const { Page } = require('@playwright/test');

exports.ProfilePage= class ProfilePage {

  profile= this.page.locator('[id=profile-menu-actuator]')
  myProfile=this.page.locator('[value="my-profile"]')
  firstName=this.page.locator('[id=first-name]')
  lastName=this.page.locator('[id=last-name]')
  changeEmail=this.page.locator('[class="button-change-email"]')
  newEmail=this.page.locator('[id=new-email]')
  password=this.page.locator('[id=password]')
  updateSubmit=this.page.locator("//button[@type='submit'][normalize-space()='Update']")
  updateButton=this.page.locator("//button[@type='button'][normalize-space()='Update']")
  errorMsg=this.page.locator("//p[@class='error error-commit']")
  constructor(public readonly page: Page) { }

  async verifyData(ele,text) {
    await expect(ele).toHaveText(text);
  }
}
