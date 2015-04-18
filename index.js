/**
 * npm-test <https://github.com/tunnckoCore/npm-test>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var path = require('path');
var del = require('delete').sync;
var run = require('spawn-commands');
var installedPath = require('get-installed-path');
var exit = process.exit;

module.exports = function npmTest(name, local) {
  var fp = installedPath(name, local);

  if (fp.length) {
    process.chdir(fp);
    run([
      {cmd: 'npm', args: ['install']},
      {cmd: 'npm', args: ['test']},
    ], function() {
      del(path.join(fp, 'node_modules'));
      run({cmd: 'npm', args: ['install', '--production']}, function() {
        exit(0);
      })
    });
    return;
  }
  name = '`' + name + '`';

  console.log('Package', name, 'not found', local ? 'locally' : 'globally.');
  exit(1);
};
