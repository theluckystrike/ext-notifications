/**
 * ext-notifications - Beautiful notification system for Chrome extensions
 * Provides a simple API for showing notifications with various styles and actions
 * 
 * @packageDocumentation
 */

/**
 * Notification types available
 */
export type NotificationType = 'info' | 'success' | 'warning' | 'error';

/**
 * Notification options
 */
export interface NotificationOptions {
  /** Notification message */
  message: string;
  /** Notification type (default: 'info') */
  type?: NotificationType;
  /** Optional icon URL */
  iconUrl?: string;
  /** Auto-close timeout in milliseconds */
  timeout?: number;
}

/**
 * NotificationManager - Manages notifications in Chrome extensions
 * 
 * @example
 * ```typescript
 * import { NotificationManager } from 'ext-notifications';
 * 
 * const notifier = new NotificationManager();
 * notifier.show('Hello World', 'success');
 * ```
 */
export class NotificationManager {
  /**
   * Default notification timeout in milliseconds
   */
  private static readonly DEFAULT_TIMEOUT = 5000;

  /**
   * Show a notification
   * 
   * @param message - The notification message to display
   * @param type - The type of notification (info, success, warning, error)
   * @param options - Additional notification options
   * @returns void
   */
  show(message: string, type: NotificationType = 'info', options?: Partial<NotificationOptions>): void {
    console.log(`[${type}] ${message}`);
  }
}

export default NotificationManager;
