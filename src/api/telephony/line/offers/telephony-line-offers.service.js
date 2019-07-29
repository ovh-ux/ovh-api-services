angular.module('ovh-api-services').service('OvhApiTelephonyLineOffers', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyLineOffersV6');
  },
}));
