'use strict';

var path = require('path');
var mapnik = require('mapnik');

function Map(opts) {
  if (!(this instanceof Map)) {
    return new Map(opts)
  }

  var width = opts.width || +256;
  var height = opts.heigth || +256;
  var srs = opts.srs || '+init=epsg:3857';

  this.map = new mapnik.Map(width, height, srs);
  this.map.bufferSize = opts.bufferSize || +50;

  mapnik.register_default_input_plugins();

  this.postgis = new mapnik.Datasource();
}

module.exports = Map;
