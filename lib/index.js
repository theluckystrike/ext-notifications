"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationManager = void 0;
// ext-notifications - Beautiful notification system
class NotificationManager {
    show(message, type = 'info') { console.log(`[${type}] ${message}`); }
}
exports.NotificationManager = NotificationManager;
exports.default = NotificationManager;
