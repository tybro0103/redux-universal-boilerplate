import Path from 'path-parser';



class Router {

  constructor() {
    this._routes = [];
    this._context = {};
  }



  /*
   *  PRIVATE HELPERS
   */

  _match(url) {
    return this._routes.find(route => route.path.match(url, true));
  };

  _doneFuncs(routeFinishCb) {
    return {
      ok: this._handleDoneOk.bind(this, routeFinishCb),
      error: this._handleDoneError.bind(this, routeFinishCb),
      redirect: this._handleDoneRedirect.bind(this, routeFinishCb)
    }
  }

  _locationFrom(routePath, url) {
    let match = routePath.match(url, true);
    // TODO: parse out params and query string
    return {
      url,
      match
    };
  }



  /*
   *  PRIVATE EVENTS
   */

  _handleDoneOk(routeFinishCb, meta={}) {
    routeFinishCb(meta, null, null);
  }

  _handleDoneError(routeFinishCb, error) {
    routeFinishCb(null, null, error);
  }

  _handleDoneRedirect(routeFinishCb, url) {
    routeFinishCb(null, url, null);
  }



  /*
   *  PUBLIC API
   */

  setContext(context) {
    this._context = context;
  }

  use(path, handler) {
    this._routes.push({
      path: new Path(path),
      handler
    });
  }

  startRouting(history, routeFinishCb) {
    history.listen(location => {
      let url = `${location.pathname}${location.search}`
      this.route(url, routeFinishCb);
    });
  }

  route(url, routeFinishCb=()=>{}) {
    // find corresponding route
    let route = this._match(url);
    // if there's not one, invoke callback without any args (no args indicates not found)
    if (!route) return routeFinishCb();
    // invoke the route
    let done = this._doneFuncs(routeFinishCb);
    let context = this._context;
    let location = this._locationFrom(route.path, url);
    route.handler(done, location, context);
  }

};



export default Router;
