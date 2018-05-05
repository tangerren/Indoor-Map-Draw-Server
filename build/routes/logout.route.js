"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logout_controller_1 = require("../controllers/logout.controller");
exports.default = (api) => {
    api.get('/logout', logout_controller_1.logout);
};
//# sourceMappingURL=logout.route.js.map