import fs from "fs";

class BaseTest {
  constructor() {
    this.Passcode = [2, 9, 1, 0];
  }

  GetUserData() {
    return userData.users[0]; 
  }

  async getSauceLabUser() {
    const dataFile = fs.readFileSync("./test/utils/data/userData.json", "utf-8");
    const loginData = JSON.parse(dataFile);
    // Return the first SauceLabUser directly from the array
    return loginData.SauceLabUser[0];
  }
}

export default new BaseTest(); 
