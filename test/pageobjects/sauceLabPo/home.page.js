import BasePage from "./base.page.js";

// home.page.js
class HomePage extends BasePage{
    get sauceLabsBackpackAddButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get sauceLabsBikeLightAddButton() { return $('#add-to-cart-sauce-labs-bike-light'); }
    get sauceLabsBikeLightRemoveButton() { return $('#remove-sauce-labs-bike-light'); }
    get cartIcon() { return $('#shopping_cart_container'); }
    get sauceLabsBackpackTitle() { return $('#item_4_title_link .inventory_item_name'); }
    get sauceLabsBackpackDetails() { return $('#item_4_title_link + .inventory_item_desc'); }
    get sauceLabsBackpackPrice() { return $('//a[@id="item_4_title_link"]//parent::div[@class="inventory_item_label"]//following-sibling::div//div[@class="inventory_item_price"]'); }
    get cartIconValue() { return $('#shopping_cart_container .shopping_cart_badge'); }

    async addToCartBackpack() {
        await this.sauceLabsBackpackAddButton.click();
    }

    async addToCartBikeLight() {
        await this.sauceLabsBikeLightAddButton.click();
    }

    async removeBikeLightFromCart() {
        await this.sauceLabsBikeLightRemoveButton.click();
    }

    async clickCartIcon() {
        await this.cartIcon.click();
        driver.pause(10000);
    }

    async getCartIconValue() {
        return await this.cartIconValue.getText();
    }

    async getBackpackProductDetails() {
        return {
            title: await this.sauceLabsBackpackTitle.getText(),
            details: await this.sauceLabsBackpackDetails.getText(),
            price: await this.sauceLabsBackpackPrice.getText(),
        };
    }
}

export default new HomePage();
