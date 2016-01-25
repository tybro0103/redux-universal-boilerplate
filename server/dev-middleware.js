import path from 'path';
import browserify  from 'browserify';
import browserifyInc  from 'browserify-incremental';
import sassMiddleware from 'node-sass-middleware';
import bourbon from 'node-bourbon';

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



/*
 *  SERVE CSS
 *  uses node-sass-middleware to compile sass and serve on demand
 *  it's intended to be used as a middleware that matches the url to an actual sass file
 *  this allows it to be used more route-like: app.get('/app.css', serveCss)
 */

// memoized sass middleware getter
let memSassMiddleware;
let getSassMiddleware = function() {
  if (memSassMiddleware == null) {
    let sassOpts = {
      src: path.join(projectRoot, 'stylesheets'),
      includePaths: bourbon.includePaths,
      response: true,
      force: true
    };
    memSassMiddleware = sassMiddleware(sassOpts);
  }
  return memSassMiddleware;
};

export function serveCss(req, res, next) {
  let hackedReq = {...req, url: '/app.css'}; // forces sassMiddleware to use app.scss, despite the real url
  return getSassMiddleware()(hackedReq, res, next);
};
