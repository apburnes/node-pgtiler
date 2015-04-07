'use strict';

var pgQuery = require('pg-query');
var connString = process.env.PGTILES_DB_URL || 'postgres://postgres:password@localhost:5432/test';

pgQuery.connectionParameters = connString;

function query(sql, params, callback) {
  if (typeof params === 'function') {
    callback = params;
    params = []
  }

  if (!callback) {
    params = params || [];
    return pgQuery(sql, params);
  }

  if (typeof callback === 'function') {
    params = params || [];
    pgQuery(sql, params, function(err, rows, result) {
      if (err) {
        return callback(err);
      }

      return callback(null, rows, result);
    });
  }
}

module.exports = query;
