angular.module('ovh-api-services').service('OvhApiPriceOverTheBoxOffer', $injector => ({
  v6() {
    return $injector.get('OvhApiPriceOverTheBoxOfferV6');
  },
}));
