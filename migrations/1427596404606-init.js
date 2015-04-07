'use strict';

var PGTiles = require('pgtiles');
var connString = process.env.PGTILES_DB_URL || 'postgres://postgres:password@localhost:5432/test';
var tiles = PGTiles(connString);

exports.up = function(success, error) {
  tiles.create(function(err, result) {
    if (err) {
      return error(err);
    }

    success(result);
  });
};

exports.down = function(success, error) {
  tiles.rollback(function(err, result) {
    if (err) {
      return error(err);
    }

    success(result);
  });
};
