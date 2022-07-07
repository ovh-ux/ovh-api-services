angular.module('ovh-api-services').service('OvhApiMeOrder', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeOrderV6');
  },
  PayRegisteredPaymentMean() {
    return $injector.get('OvhApiMeOrderPayRegisteredPaymentMean');
  },
}));
