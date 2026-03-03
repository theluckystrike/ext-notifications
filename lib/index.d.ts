/**
 * ext-notifications - Beautiful notification system for Chrome extensions
 * TypeScript type definitions
 */

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface NotificationOptions {
  title: string;
  message: string;
  iconUrl?: string;
  theme?: NotificationTheme;
  actions?: NotificationAction[];
  timeout?: number;
}

export interface NotificationTheme {
  background: string;
  text: string;
  icon?: string;
}

export interface NotificationAction {
  title: string;
  action: string;
}

export interface NotificationInstance {
  onAction(callback: (action: string) => void): void;
}

export class NotificationManager {
  /**
   * Show a notification with the given message and type
   */
  show(message: string, type?: NotificationType): void;
  
  /**
   * Create a notification with full options
   */
  create(options: NotificationOptions): Promise<NotificationInstance>;
  
  /**
   * Clear a specific notification by ID
   */
  clear(id: string): void;
  
  /**
   * Clear all notifications
   */
  clearAll(): void;
}

export default NotificationManager;

/**
 * Show a notification (convenience function)
 */
export function notify(options: NotificationOptions): Promise<NotificationInstance>;

/**
 * Create a notification instance
 */
export function createNotification(options: NotificationOptions): Promise<NotificationInstance>;

/**
 * Clear a notification by ID
 */
export function clear(id: string): void;

/**
 * Clear all notifications
 */
export function clearAll(): void;

/**
 * Built-in notification themes
 */
export const themes: {
  success: NotificationTheme;
  warning: NotificationTheme;
  error: NotificationTheme;
  info: NotificationTheme;
};
