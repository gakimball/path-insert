'use strict';

const join = require('path').join;
const escapeStringRegexp = require('escape-string-regexp');

/**
 * Insert a string in the middle of a path, using a segment at the base of the path as the target.
 * @param {String} path - Full path.
 * @param {String} base - Path segment to insert `replacement` *after*.
 * @param {String} insert - Path segment to insert.
 * @returns {String} Path with `insert` inserted into `path`.
 */
module.exports.start = (path, base, insert) => {
  return path.replace(new RegExp(`^${escapeStringRegexp(base)}`), join(base, insert));
};

/**
 * Insert a string in the middle of a path, using a segment at the end of the path as the target.
 * @param {String} path - Full path.
 * @param {String} end - Path segment to insert `replacement` *before*.
 * @param {String} insert - Path segment to insert.
 * @returns {String} Path with `insert` inserted into `string`.
 */
module.exports.end = (path, end, insert) => {
  return path.replace(new RegExp(`${escapeStringRegexp(end)}$`), join(insert, end));
};
