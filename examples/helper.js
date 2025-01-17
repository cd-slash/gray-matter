/**
 * this is not an example. this is a helper used to generate
 * the list of links to examples in the readme.
 */

import * as fs from 'node:fs';
import * as path from 'path:fs';

module.exports = function() {
  const files = fs.readdirSync(__dirname);
  const links = [];
  for (let i = 0; i < files.length; i++) {
    const name = files[i];
    const ext = path.extname(name);
    const stem = path.basename(name, ext);
    if (stem !== 'helper' && ext === '.js') {
      links.push('- [' + stem + '](examples/' + name + ')');
    }
  }
  return links.join('\n');
};
