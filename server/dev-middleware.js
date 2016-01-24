import path from 'path';
import browserify  from 'browserify';
import browserifyInc  from 'browserify-incremental';

let projectRoot = path.join(__dirname, '../');



/*
 *  SERVE CLIENT JS
 *  uses browserify to serve client js on demand
 *  uses browserify-inc to serve it fast
 */

export function serveClientJs(req, res) {
  // browserify incremental cache file
  let bIncCacheFile = path.join(projectRoot, 'tmp/browserify-inc-cache.json');
  // client javascript entry point file
  let jsEntryFile = path.join(projectRoot, 'client/index.js');
  let bOpts = {
    ...browserifyInc.args,
    debug: true,
    insertGlobals: true,
    transform: ['babelify'],
    noParse: [], // add libs like 'moment', 'lodash', 'jquery', etc
    extensions: ['.js', '.jsx']
  };
  let b = browserify(jsEntryFile, bOpts);
  // use b-inc
  browserifyInc(b, {cacheFile: bIncCacheFile});
  // send the browserified output as response
  res.type('application/javascript');
  b.bundle().pipe(res);
};
