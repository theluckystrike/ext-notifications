# ext-notifications

[![npm version](https://img.shields.io/npm/v/ext-notifications)](https://npmjs.com/package/ext-notifications)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/ext-notifications?style=social)](https://github.com/theluckystrike/ext-notifications)

> Beautiful notifications for Chrome extensions.

Part of the [Zovo](https://zovo.one) family of privacy-first Chrome extensions and developer tools.

## Overview

`ext-notifications` is a comprehensive library for creating beautiful, customizable notifications in Chrome extensions. It provides a clean API for showing notifications with various styles, icons, and actions.

## Features

- ✅ **Beautiful UI** - Modern, clean notification designs
- ✅ **Customizable** - Multiple themes and styles
- ✅ **TypeScript Support** - Fully typed for better developer experience
- ✅ **MV3 Compatible** - Works with Manifest V3 extensions
- ✅ **Actions** - Interactive notification buttons
- ✅ **Privacy-First** - No data collection, all local

## Installation

### From npm

```bash
npm install ext-notifications
```

### From Source

```bash
# Clone the repository
git clone https://github.com/theluckystrike/ext-notifications.git
cd ext-notifications

# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

### Basic Notification

```typescript
import { notify } from 'ext-notifications';

// Show a simple notification
await notify({
  title: 'Hello!',
  message: 'This is a notification',
  iconUrl: 'icons/icon.png'
});
```

### With Actions

```typescript
import { createNotification } from 'ext-notifications';

const notification = await createNotification({
  title: 'Download Complete',
  message: 'Your file has been downloaded',
  actions: [
    { title: 'Open', action: 'open' },
    { title: 'Dismiss', action: 'dismiss' }
  ]
});

notification.onAction((action) => {
  if (action === 'open') {
    // Open the file
  }
});
```

### Custom Themes

```typescript
import { notify, themes } from 'ext-notifications';

// Use a built-in theme
await notify({
  title: 'Success!',
  message: 'Operation completed',
  theme: themes.success
});

// Or create custom theme
await notify({
  title: 'Warning',
  message: 'Check your settings',
  theme: {
    background: '#FFF3E0',
    text: '#E65100',
    icon: 'warning.png'
  }
});
```

## API Reference

### Functions

| Function | Description |
|----------|-------------|
| `notify(options)` | Show a notification |
| `createNotification(options)` | Create a notification instance |
| `clear(id)` | Clear a notification |
| `clearAll()` | Clear all notifications |

### Notification Options

| Option | Type | Description |
|--------|------|-------------|
| `title` | string | Notification title |
| `message` | string | Notification message |
| `iconUrl` | string | Icon URL |
| `theme` | object | Custom theme |
| `actions` | array | Action buttons |
| `timeout` | number | Auto-close timeout |

## Related Packages

This package is part of the Zovo extension notifications ecosystem:

- [ext-notification-center](https://github.com/theluckystrike/ext-notification-center) - Notification center
- [ext-notification-bell](https://github.com/theluckystrike/ext-notification-bell) - Notification bell
- [ext-notification-manager](https://github.com/theluckystrike/ext-notification-manager) - Notification manager
- [chrome-notification-center](https://github.com/theluckystrike/chrome-notification-center) - Chrome notifications

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/notifications-improvement`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/notifications-improvement`
7. **Submit** a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/theluckystrike/ext-notifications.git
cd ext-notifications

# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
```

## Built by Zovo

Part of the [Zovo](https://zovo.one) developer tools family — privacy-first Chrome extensions built by developers, for developers.

## See Also

### Related Zovo Repositories

- [zovo-extension-template](https://github.com/theluckystrike/zovo-extension-template) - Boilerplate for building privacy-first Chrome extensions
- [zovo-types-webext](https://github.com/theluckystrike/zovo-types-webext) - Comprehensive TypeScript type definitions for browser extensions
- [zovo-permissions-scanner](https://github.com/theluckystrike/zovo-permissions-scanner) - Privacy scanner for Chrome extensions
- [zovo-indexer](https://github.com/theluckystrike/zovo-indexer) - Indexing service for Zovo extensions

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions
- [Zovo Permissions Scanner](https://chrome.google.com/webstore/detail/zovo-permissions-scanner) - Check extension privacy grades

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT - [Zovo](https://zovo.one)

---

*Built by developers, for developers. No compromises on privacy.*
