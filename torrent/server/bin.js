#!/usr/bin/env node
'use strict';

var STATIC_OPTIONS = { maxAge: 3600000 };

var process = require('process');
process.title = 'MVFLIX-Torrent-server';

var express = require('express'),
  http = require('http'),
  path = require('path'),
  serveStatic = require('serve-static'),
  socket = require('./socket'),
  api = require('.')
    .use(serveStatic(path.join(__dirname, '../temp'), STATIC_OPTIONS));

var server = http.createServer(api);
socket(server);
var port = 9000;

server.listen(port).on('error', function (e) {
  if (e.code !== 'EADDRINUSE' && e.code !== 'EACCES') {
    throw e;
  }
  console.error('Port ' + port + ' is busy. Trying the next available port...');
  server.listen(++port);
}).on('listening', function () {
  console.log('Listening on http://localhost:' + port);
});
