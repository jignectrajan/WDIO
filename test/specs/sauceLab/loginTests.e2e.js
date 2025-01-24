import baseTest from "../BaseTest.js";
import loginPage from "../../pageobjects/sauceLabPo/login.page.js";
import homePage from "../../pageobjects/sauceLabPo/home.page.js";
const userCredentials = await baseTest.getSauceLabUser();
import { assert, expect } from "chai";

describe("Swag Labs Login Page Tests", () => {

  beforeEach(async function () {
    // Navigate to application and verify URL
    let homePageUrl = browser.options.baseUrl;
    await homePage.navigateToPage('/');
    assert.equal(await browser.getUrl(), homePageUrl, "Home page URL doesn't not match");
  });

  it("Verify that user logged in successfully", async () => {
    // Enter valid user credentials and verify user gets logged in successfully
    await loginPage.enterLoginDetails(userCredentials.username, userCredentials.password);
    const actualProductText = await loginPage.getProductText();
    expect(actualProductText, "Product page title doesn't match").equal(`Products`)
  });

  it.only('Verify that the validation message is displayed when only password is entered', async () => {
    // Do not enter 'Email', enter only password and verify the validation message
    await loginPage.enterLoginDetails('', userCredentials.password);
    const expectedValidationMessage = "Epic sadface: Username is required";
    assert.strictEqual(await loginPage.getValidationMessageText(), expectedValidationMessage, "Validation message didn't match");
  });

  // // Runs after all tests in the block
  // afterEach(async () => {
  //   await loginPage.tapOnMenuButton();
  //   await loginPage.tapOnLogoutButton();
  // });
});
