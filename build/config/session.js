"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  
class Session {
    constructor() {
    }
    // 设置/更新Cookie对应的session
    updateCookie(cookie, t) {
        t = t ? t * 1000 : 600000; // 默认10分钟a
        this.client[cookie] = { expire: new Date().getTime() + t };
    }
    // 查询Cookie
    getCookie(cookie) {
        if (this.client[cookie]) {
            return new Date().getTime() < this.client[cookie].expire;
        }
        else {
            return false;
        }
    }
    delUuid(cookie) {
        delete this.client[cookie];
    }
}
let session = new Session();
exports.session = session;
//# sourceMappingURL=session.js.map