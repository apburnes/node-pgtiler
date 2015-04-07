'use strict';

var expect = require('chai').expect;
var query = require('../util/query');

var sql = 'SELECT SUM(10);';

describe('query', function() {
  it('should return a successful query with a callback', function(done) {
    var params = [];
    query(sql, params, function(err, rows, result) {
      expect(result).to.be.an('object');
      expect(result.command).to.equal('SELECT');
      expect(rows[0].sum).to.be.equal('10');
      done(err);
    });
  });

  it('should return a successful query with a callback and no params', function(done) {
    query(sql, function(err, rows, result) {
      expect(result).to.be.an('object');
      expect(result.command).to.equal('SELECT');
      expect(rows[0].sum).to.be.equal('10');
      done(err);
    });
  });

  it('should return a successful query with a promise', function() {
    var params = [];
    return query(sql, params)
      .spread(function(rows, result) {
        expect(result).to.be.an('object');
        expect(result.command).to.equal('SELECT');
        expect(rows[0].sum).to.be.equal('10');
        return;
      });
  });

  it('should return a successful query with a promise and no params', function() {
    return query(sql)
      .spread(function(rows, result) {
        expect(result).to.be.an('object');
        expect(result.command).to.equal('SELECT');
        expect(rows[0].sum).to.be.equal('10');
        return;
      });
  });
});
