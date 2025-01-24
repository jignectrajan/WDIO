import { $ } from '@wdio/globals'

class ProductThankYouPage {
    /**
     * define selectors using getter methods
     */
    get orderCompleteText() {
        return $(`//h2[contains(@class,'complete-header')]`);
    }

    getTextOfTheCompletedOrder = async () => await (await this.orderCompleteText).getText();
}

export default new ProductThankYouPage();
