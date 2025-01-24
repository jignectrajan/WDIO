class Login {

  get userNameTextbox() {
    return $("#user-name");
  }

  get passwordTextbox() {
    return $("#password");
  }

  get loginButton() {
    return $("#login-button");
  }

  get productText() {
    return $(`//div[contains(@class,'header_secondary')]/span`);
  }

  get menuButton() {
    return $('#react-burger-menu-btn');
  }

  get logoutButton() {
    return $('#logout_sidebar_link');
  }

  get validationMessageText() { 
    return $('#login_button_container .error-message-container'); 
  }


  async enterLoginDetails(userName, password) {
    await (await this.userNameTextbox).waitForDisplayed({timeout: 5000});
    await (await this.userNameTextbox).setValue(userName); 
    await (await this.passwordTextbox).setValue(password); 
    await (await this.loginButton).click(); 
    await driver.pause(10000);
  }

  async getProductText() {
    return await (await this.productText).getText();
  }

  async tapOnMenuButton() {
    return await (await this.menuButton).click();
  }

  async tapOnLogoutButton() {
    return await (await this.logoutButton).click();
  }

  async getValidationMessageText() {
    return await this.validationMessageText.getText();
  } 
}

export default new Login();
