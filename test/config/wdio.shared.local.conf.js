import { config } from "./wdio.shared.conf.js";
import * as chai from "chai";

//
// ======
// Appium
// ======
//
config.services = (config.services ? config.services : []).concat([
    // [
    //     "appium",
    //     {
    //         args: {
    //             address: '127.0.0.1',
    //             port: 4838
    //         }
    //         //logPath: './'
    //     }
    // ],
    // 'shared-store'
]);

config.before = function () {
    global.chaiExpect = chai.expect;
    global.chaiAssert = chai.assert;
    global.chaiShould = chai.should();
}

// =====================
// Server Configurations
// =====================
//
//config.port = 4722;

export default config;