/*
To Enable ES6 Imports in Node.JS

1. Install necessary packages

```npm install @babel/core @babel/register @babel/preset-env --save-dev```

2. Tweak your server.js

``` const express = require('express') ``` => ``` import express from 'express' ```

you'll get an error SyntaxError: Unexpected token import. It happens because we don't "babelify" our node.js code on the fly yet.

3. Add start.js file

This file will act as an entry-point for our node.js app and will contain babel registration code:

*/
//---------------------------------------------------- start.js ---------------------------------------------------------------------

// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
    presets: ["@babel/preset-env"]
});

// Import the rest of our application.
module.exports = require('./objects.js')