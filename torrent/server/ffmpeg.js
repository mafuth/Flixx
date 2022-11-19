'use strict';

var path = require('path'),
  fs = require('fs'),
  pump = require('pump');

module.exports = function (req, res, torrent, file) {
  var param = req.query.ffmpeg,
    ffmpeg = require('fluent-ffmpeg');

  res.type('video/webm');
  var command = ffmpeg(file.createReadStream())
    .videoCodec('libvpx').audioCodec('libvorbis').format('webm')
    .audioBitrate(128)
    .videoBitrate(1024)
    .outputOptions([
      //'-threads 2',
      '-deadline realtime',
      '-error-resilient 1'
    ])
    .on('start', function (cmd) {
      console.log(cmd);
    })
    .on('error', function (err) {
      console.error(err);
    });
  pump(command, res);
}