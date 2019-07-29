angular.module('ovh-api-services').service('OvhApiMeAvailableAutomaticPaymentMeans', $injector => ({
  v6() {
    return $injector.get('OvhApiMeAvailableAutomaticPaymentMeansV6');
  },
}));
