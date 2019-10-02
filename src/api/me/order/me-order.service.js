angular.module('ovh-api-services').service('OvhApiMeOrder', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeOrderV6');
  },
  v7() {
    return $injector.get('OvhApiMeOrderV7');
  },
  PayRegisteredPaymentMean() {
    return $injector.get('OvhApiMeOrderPayRegisteredPaymentMean');
  },
}));
