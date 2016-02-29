export function enterRoute(location, page) {
  return {
    type: 'ROUTING_ENTER_ROUTE',
    location,
    page
  };
}
