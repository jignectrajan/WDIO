class ProductFinishPage {
    /**
     * define selectors using getter methods
     */
    get fininshButton() {
        return $(`#finish`);
    }
   async clickOnTheFinishOutButton() {
        await (await this.fininshButton).click();
    }
}
export default new ProductFinishPage();
