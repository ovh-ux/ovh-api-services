angular.module('ovh-api-services').service('OvhApiMePayment', $injector => ({
  Method() {
    return $injector.get('OvhApiMePayMethod');
  },
  Transaction() {
    return $injector.get('OvhApiMePaymentTransaction');
  },
}));
