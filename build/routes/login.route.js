"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller = require("../controllers/login.controller");
exports.default = (api) => {
    api.get('/login', controller.login);
};
//# sourceMappingURL=login.route.js.map