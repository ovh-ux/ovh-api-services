angular.module('ovh-api-services').service('OvhApiTelephonyServiceOfferTask', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyServiceOfferTaskV6');
  },
}));
