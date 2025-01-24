class ProductCartPage {
    /**
     * define selectors using getter methods
     */
    get checkoutButton() {
        return $('#checkout');
    }

    get sauceLabsBackpackTitle() { return $('#item_4_title_link .inventory_item_name'); }
    get sauceLabsBackpackDetails() { return $('#item_4_title_link').parentElement().$('.inventory_item_desc'); }
    get sauceLabsBackpackPrice() { return $('#item_4_title_link').parentElement().$('.inventory_item_price'); }


    clickOnTheCheckOutButton = async () => await (await this.checkoutButton).click();

    async getBackpackProductDetails() {
        (await this.sauceLabsBackpackTitle).waitForDisplayed({timeout: 5000});
        return {
            title: await this.sauceLabsBackpackTitle.getText(),
            details: await this.sauceLabsBackpackDetails.getText(),
            price: await this.sauceLabsBackpackPrice.getText(),
        };
    }
}
export default new ProductCartPage();
