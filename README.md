# @schiacciata/logger
A simple node.js logger made in TypeScript 🎨

## Table Of Contents
  - [Installation](#installation)
  - [Example](#example)

## Installation

```sh
    npm install @schiacciata/logger
```

## Example

```javascript
    const { Logger, Colors } = require('@schiacciata/logger');
    
    const logger = new Logger({
        date: true,
        symbols: true,
        text: true,
    });

    logger.log('string');
    console.log(Colors.text.red, 'red text', Colors.style.reset);
```
