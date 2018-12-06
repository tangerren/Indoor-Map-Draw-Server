"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mall_1 = require("../controllers/mall");
const floor_1 = require("../controllers/floor");
exports.default = (api) => {
    // curl http://localhost:5000/mall/setInfo
    api.get('/mall/setInfo', mall_1.setInfo);
    // curl http://localhost:5000/mall/getInfo/1
    api.get('/mall/getInfo/:mallId', mall_1.getInfo);
    // curl http://localhost:5000/mall/getList
    api.get('/mall/getList', mall_1.getList);
    // curl http://localhost:5000/mall/getFloors/1
    api.get('/mall/getFloors/:mallId', floor_1.getFloorByMall);
};
//# sourceMappingURL=mall.route.js.map