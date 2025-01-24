import assert from 'assert';
import loginPage from '../../pageobjects/sauceLabPo/login.page.js';
import homePage from '../../pageobjects/sauceLabPo/home.page.js';
import productCartPage from '../../pageobjects/sauceLabPo/productCart.page.js';
import baseTest from '../BaseTest.js';

describe('Swag Labs Home Page Tests', function () {
    it('Verify that user can add and remove items from the cart successfully', async function () {
        // Step 1: Navigate to the login page
        await homePage.navigateToPage('/');
        let homePageUrl = browser.options.baseUrl;
        console.log("Base Url is: ", homePageUrl);
        assert.strictEqual(await browser.getUrl(), homePageUrl, "URL didn't match");

        // Step 2: Log in with valid credentials
        const userCredentials = await baseTest.getSauceLabUser();
        await loginPage.enterLoginDetails(userCredentials.username, userCredentials.password);
        assert.strictEqual(await browser.getUrl(), `${homePageUrl}inventory.html`, "URL didn't match after login");

        // Step 3: Add items to the cart
        await homePage.addToCartBackpack();
        await homePage.addToCartBikeLight();
        assert.strictEqual(await homePage.getCartIconValue(), '2', "Cart icon value didn't match");

        // Step 4: Remove item from the cart
        await homePage.removeBikeLightFromCart();
        assert.strictEqual(await homePage.getCartIconValue(), '1', "Cart icon value didn't match after removing item");

        // Step 5: Capture product details from the home page
        const homeProductDetails = await homePage.getBackpackProductDetails();

        // Step 6: Navigate to the cart page
        await homePage.clickCartIcon();
        console.log("expected Url is: ", await browser.getUrl());
        console.log("actual se Url is: ", `${homePageUrl}cart.html`);
        assert.strictEqual(await browser.getUrl(), `${homePageUrl}cart.html`, "URL didn't match on cart page");

        // Step 7: Capture product details from the cart page
        const cartProductDetails = await productCartPage.getBackpackProductDetails();
        assert.equal(homeProductDetails.title, cartProductDetails.title, "Product title didn't match");
        assert.equal(homeProductDetails.details, cartProductDetails.details, "Product details didn't match");
        assert.equal(homeProductDetails.price, cartProductDetails.price, "Product price didn't match");
    });

    // Runs after all tests in the block
    afterEach(async () => {
        await loginPage.tapOnMenuButton();
        await loginPage.tapOnLogoutButton();
    });
});
