'use strict';

const expect = require('chai').expect;
const pathInsert = require('.');

describe('pathInsert()', () => {
  const path = '/Users/geoff/Videos/secret-videos/puppers/doggo.mov';
  const expected = '/Users/geoff/Videos/real-secret-videos/secret-videos/puppers/doggo.mov';

  it('can replace at the start of a path', () => {
    expect(pathInsert.start(path, '/Users/geoff/Videos', 'real-secret-videos')).to.equal(expected);
  });

  it('can replace at the end of a path', () => {
    expect(pathInsert.end(path, 'secret-videos/puppers/doggo.mov', 'real-secret-videos')).to.equal(expected);
  });
});
