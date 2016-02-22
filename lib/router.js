import Path from 'path-parser';



class Router {

  constructor() {
    this.routes = [];
  }

  _match(url) {
    return this.routes.find(route => route.path.match(url, true));
  };

  use(path, handler) {
    this.routes.push({
      path: new Path(path),
      handler
    });
  }

  startRouting(history) {
    history.listen(location => {
      let url = `${location.pathname}${location.search}`
      this.route(url);
    });
  }

  route(url) {
    let route = this._match(url);
    route && route.handler();
  }

};

export default Router;
