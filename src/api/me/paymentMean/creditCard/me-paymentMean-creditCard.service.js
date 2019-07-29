angular.module('ovh-api-services').service('OvhApiMePaymentMeanCreditCard', $injector => ({
  v6() {
    return $injector.get('OvhApiMePaymentMeanCreditCardV6');
  },
}));
