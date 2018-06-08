"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
exports.default = (api) => {
    api.get('/login', user_1.login);
    api.get('/logout', user_1.logout);
    api.get('/reg', user_1.regUser);
};
//# sourceMappingURL=user.route.js.map