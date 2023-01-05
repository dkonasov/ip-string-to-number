# ip-string-to-number &middot; [![npm](https://img.shields.io/npm/v/react-aport)](https://www.npmjs.com/package/ip-string-to-number)

Simple helper functions for converting IP addresses from human-readable string to integers. IPv6 support included!

## Usage

### IPv4

```js
const { ipV4StringToNumber } = require('ip-string-to-number');

ipV4StringToNumber('8.8.8.8'); // 134744072
```

### IPv6

Result will be always bigint, as IPv6 address value can overcome MAX_SAFE_INTEGER in JS.

```js
const { ipV6StringToNumber } = require('ip-string-to-number');

ipV6StringToNumber('::1'); // 1n
```