// ext-notifications - Beautiful notification system
export class NotificationManager {
  show(message: string, type = 'info'): void { console.log(`[${type}] ${message}`); }
}
export default NotificationManager;
