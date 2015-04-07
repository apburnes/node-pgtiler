'use strict';

var expect = require('chai').expect;
var Map = require('../lib/map');

describe('Map', function() {
  it('should be a Map class', function() {
    var map = Map({});
    expect(map).to.be.an('object');
    console.log(map);
    return;
  });
});
