/**
 * The Cryptographical Token Generator (CLI)
 *
 * This program generate URL friendly (BASE58) pseudo-random token.
 *
 * BASE58: 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz
 * The non-alphanumeric characters and letters which might look ambiguous are avoided.
 *
 * Usage:
 *   node gen-token [length]
 *   @param {int} length  Token length by characters.
 */

const DEFAULT_LENGTH  = 32;
const LENGTH          = Math.round(process.argv[2]);
const UIDGenerator    = require('uid-generator');

let length  = DEFAULT_LENGTH;
let uidgen  = null;

if (Number.isNaN(LENGTH) || LENGTH <= 0 || LENGTH === Infinity)
{
  length = DEFAULT_LENGTH;
}
else
{
  length = LENGTH;
}

uidgen          = new UIDGenerator(null, UIDGenerator.BASE58, length);
console.log(uidgen.generateSync());
