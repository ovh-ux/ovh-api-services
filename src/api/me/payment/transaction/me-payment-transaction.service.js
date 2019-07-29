angular.module('ovh-api-services').service('OvhApiMePaymentTransaction', $injector => ({
  v6() {
    return $injector.get('OvhApiMePaymentTransactionV6');
  },
}));
