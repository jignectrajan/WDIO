import { User } from "../dataobject/user.js";

export class UserData {
    static getUserDetails() {
        return new User({
            userFirstName: "Automation",
            userLastName: "Testing",
            zipCode: "123456"
        });
    }
}

