
export function home(done, location, {store}) {
  done({page: 'home'});
};

export function foo(done, location, {store}) {
  done({redirect: '/'});
};
