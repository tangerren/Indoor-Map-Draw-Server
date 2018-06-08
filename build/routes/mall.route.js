"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mall_1 = require("../controllers/mall");
exports.default = (api) => {
    api.get('/mall/getInfo/:mallId', mall_1.getInfo);
    api.get('/mall/setInfo', mall_1.setInfo);
    api.get('/mall/getList', mall_1.getList);
};
//# sourceMappingURL=mall.route.js.map