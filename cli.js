#!/usr/bin/env node
/* eslint-disable no-console */
const { mdLinks } = require('./lib/index.js');

// eslint-disable-next-line no-undef
const path = process.argv.slice(2).pop();
mdLinks(path)
  .then(result => console.log(result))
  .catch(error => console.log(error));
