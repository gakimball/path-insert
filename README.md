# path-insert

> Insert a path into another path

[![Travis](https://img.shields.io/travis/gakimball/path-insert.svg?maxAge=2592000)](https://travis-ci.org/gakimball/path-insert) [![npm](https://img.shields.io/npm/v/path-insert.svg?maxAge=2592000)](https://www.npmjs.com/package/path-insert)

## Installation

```bash
npm install path-insert
```

## Usage

```js
const pathInsert = require('path-insert');

const path = '/Users/geoff/Videos/secret-videos/puppers/doggo.mov';

pathInsert.start(path, '/Users/geoff/Videos', 'real-secret-videos');
// => '/Users/geoff/Videos/real-secret-videos/secret-videos/puppers/doggo.mov'

pathInsert.end(path, 'secret-videos/puppers/doggo.mov', 'real-secret-videos');
// => '/Users/geoff/Videos/real-secret-videos/secret-videos/puppers/doggo.mov'
```

## API

### pathInsert.start(path, base, insert)

Insert a string in the middle of a path, using a segment at the base of the path as the target.

- **path** (String): Full path.
- **base** (String): Path segment to insert `replacement` *after*.
- **insert** (String): Path segment to insert.

Returns a modified path with `insert` inserted into `string`.

### pathInsert.end(path, end, insert)

Insert a string in the middle of a path, using a segment at the end of the path as the target.

- **path** (String): Full path.
- **end** (String): Path segment to insert `replacement` *before*.
- **insert** (String): Path segment to insert.

Returns a modified path with `insert` inserted into `string`.

## Local Development

```bash
git clone https://github.com/gakimball/path-insert
cd path-insert
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
