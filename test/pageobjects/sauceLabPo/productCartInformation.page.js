import { UserData } from '../../datafactory/userData.js';

class ProductCartInformationPage {

    /**
     * define selectors using getter methods
     */

    get firstNameTextBox() {
        return $(`//input[contains(@placeholder,'First Name')]`);
    }

    get lastNameTextBox() {
        return $(`//input[contains(@placeholder,'Last Name')]`);
    }

    get zipCodeTextBox() {
        return $('#postal-code');
    }

    get contunueButton() {
        return $('#continue');
    }

    async fillTheUserDetailsAndClickOnTheContinueButton() {

        const userDetails = UserData.getUserDetails();
        await (await this.firstNameTextBox).setValue(userDetails.userFirstName);
        await (await this.lastNameTextBox).setValue(userDetails.userLastName);
        await (await this.zipCodeTextBox).setValue(userDetails.zipCode);
        await (await this.contunueButton).click();
    }
}
export default new ProductCartInformationPage();



