"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const controller = require("../controllers/test.controller");
exports.default = (api) => {
    // curl http://localhost:5000/versioned
    // curl -s -H 'accept-version: ~1' localhost:5000/versioned
    api.get('/versioned', restify.plugins.conditionalHandler([
        { version: '1.2.0', handler: controller.testV1 },
        { version: ['2.0.0', '2.1.0', '2.2.0'], handler: controller.testV2 }
    ]));
};
//# sourceMappingURL=test.route.js.map