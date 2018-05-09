"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller = require("../controllers/reg.controller");
exports.default = (api) => {
    api.get('/reg', controller.regUser);
};
//# sourceMappingURL=reg.route.js.map