/**
 * Expose `Base64`
 */

var Base64 = module.exports = exports;

/**
 * Encode the given `str`
 *
 * @param {String} str utf8 representation
 */

Base64.encode = function(str) {
  return new Buffer(str).toString('base64')
              .replace(/=+$/g, '')
              .replace(/\//g, '_')
              .replace(/\+/g, '-');
};
  
/**
 * Decode the given `str`
 *
 * @param {String} str Base64 url safe representation
 */

Base64.decode = function(str) {
  str = str.replace(/_/g, '/')
           .replace(/-/g, '+');
  
  return new Buffer(str, 'base64').toString('utf8');
};
