#!/usr/bin/env node
/**
 * npm-test <https://github.com/tunnckoCore/npm-test>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var npmTest = require('./index');
var argv = process.argv.slice(2);

var name = argv && argv.shift();
var local = false;

if (argv.length) {
  if (/^(?:-l|--local)$/i.test(argv[0])) {
    local = true;
    npmTest(name, local);
  } else {
    npmTest(name, local);
  }
} else {
  console.log('Usage: npm-test <packageName> [-l|--local]');
  process.exit(1);
}
