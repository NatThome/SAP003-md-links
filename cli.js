#!/usr/bin/env node
/* eslint-disable no-console */
const chalk = require('chalk');
const mdLinks = require('./lib/index.js');

const path = process.argv.slice(2).pop();
mdLinks(path)
  .then((result) => result.forEach(element => {
    console.log('\n', chalk.yellow(element.href),'\n', element.text.substring(0, 50));
  }))
  .catch(error => console.log(error));

