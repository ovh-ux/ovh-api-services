angular.module('ovh-api-services').service('OvhApiPriceOverTheBoxOfferV6', $resource => $resource('/price/overTheBox/offer/:offerName', {
  offerName: '@offerName',
}, {
  schema: { method: 'GET', url: '/price.json' },
}));
