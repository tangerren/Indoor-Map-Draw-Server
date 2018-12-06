"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
exports.default = (api) => {
    // curl http://localhost:5000/login
    api.get('/login', user_1.login);
    // curl http://localhost:5000/logout
    api.get('/logout', user_1.logout);
    // curl http://localhost:5000/reg
    api.get('/reg', user_1.regUser);
};
//# sourceMappingURL=user.route.js.map