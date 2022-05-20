# @schiacciata/logger
A simple logger made in JavaScript for the web 🎨

## Table Of Contents
  - [Installation](#installation)
  - [Example](#example)

## Installation

Download [Logger.js](Logger.js) and put it in your project folder or link it.

## Example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>@schiacciata/logger</title>
    <script src="Logger.js"></script>
  </head>
  <body>
    <noscript><h1>This page requires JS</h1></noscript>

    <h1>Your html code</h1>
    <p>
      Open the <kbd>console</kbd> 🔎
      <button onclick="logger.error('Button clicked!')">🔄</button>
    </p>
    <script>
      const logger = new Logger({
        symbols: true,
        text: true,
        date: true,
      });
      logger.success('Hello world');
    </script>
  </body>
</html>
```
