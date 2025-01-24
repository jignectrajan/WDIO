class ProductList {
    /**
     * define selectors using getter methods
     */
    get addtoCartButton() {
        return $$(`//button[contains(@name,'add-to-cart')]`);
    }
    get cartButton() {
        return $('#shopping_cart_container');
    }
    get filterButton() {
        return $(`//select[contains(@class,'product_sort_container')]`);
    }

    get ascOrderButton() {
        return $(`//select[contains(@class,'product_sort_container')]/option[text()="Name (A to Z)"]`);
    }

    get descOrderButton() {
        return $(`//select[contains(@class,'product_sort_container')]/option[text()="Name (Z to A)"]`);
    }

    get lowPriceButton() {
        return $(`//select[contains(@class,'product_sort_container')]/option[text()="Price (low to high)"]`);
    }

    get highPriceButton() {
        return $(`//select[contains(@class,'product_sort_container')]/option[text()="Price (high to low)"]`);
    }

    get productList() {
        return $$(`//div[contains(@class,'inventory_item_name ')]`);
    }

    get productPriceList() {
        return $$(`//div[contains(@class,'inventory_item_price')]`);
    }

    clickOnTheAddToCartButton = async () => await (await this.addtoCartButton[1]).click();

    clickOnTheCartButton = async () => await (await this.cartButton).click();

    clickOnThefilterButton = async () => await (await this.filterButton).click();

    clickOnTheAscOrderButton = async () => await (await this.ascOrderButton).click();

    clickOnTheDescOrderButton = async () => await (await this.descOrderButton).click();

    clickOnTheLowPriceButton = async () => await (await this.lowPriceButton).click();

    clickOnTheHighPriceButton = async () => await (await this.highPriceButton).click();

    getTextOfProductList = async () => await this.productList.map(item => item.getText());

    getPriceOfProductList = async () => await this.productPriceList.map(item => item.getText());

}
export default new ProductList();