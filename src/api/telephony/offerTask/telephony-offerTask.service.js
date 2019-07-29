angular.module('ovh-api-services').service('OvhApiTelephonyOfferTask', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyOfferTaskV6');
  },
}));
