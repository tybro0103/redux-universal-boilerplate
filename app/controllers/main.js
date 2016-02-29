
export function home(done, location, {store}) {
  done.ok({page: 'home'});
};

export function foo(done, location, {store}) {
  done.redirect('/');
};
