import baseTest from "../BaseTest.js";
import productCartPage from "../../pageobjects/sauceLabPo/productCart.page.js";
import productCartInformationPage from "../../pageobjects/sauceLabPo/productCartInformation.page.js";
import productListPage from "../../pageobjects/sauceLabPo/productList.page.js";
import productFinishPage from "../../pageobjects/sauceLabPo/productFinish.page.js";
import productThankYouPage from "../../pageobjects/sauceLabPo/productThankYou.page.js";
import loginPage from "../../pageobjects/sauceLabPo/login.page.js";
import homePage from "../../pageobjects/sauceLabPo/home.page.js";
import { assert, expect } from "chai";

describe("Swag Labs Product Page Tests", () => {

  beforeEach(async function () {
    // Navigate to application and verify URL
    let homePageUrl = browser.options.baseUrl;
    await homePage.navigateToPage('/');
    assert.equal(await browser.getUrl(), homePageUrl, "Home page URL doesn't not match");
  });

  it("Verify that user can order product successfully", async () => {
    // Enter valid user credentials
    const userCredentials = await baseTest.getSauceLabUser();
    await loginPage.enterLoginDetails(userCredentials.username, userCredentials.password);

    await productListPage.clickOnTheAddToCartButton();
    await productListPage.clickOnTheCartButton();
    await productCartPage.clickOnTheCheckOutButton();
    await productCartInformationPage.fillTheUserDetailsAndClickOnTheContinueButton();
    await productFinishPage.clickOnTheFinishOutButton();

    const text = await productThankYouPage.getTextOfTheCompletedOrder();
    expect(text, "The thank you page text doesn't matched.").equal(`Thank you for your order!`);
  });

  // Runs after all tests in the block
  afterEach(async () => {
    await loginPage.tapOnMenuButton();
    await loginPage.tapOnLogoutButton();
  });
});
