angular.module('ovh-api-services').service('OvhApiMePaymentMeanPaypal', $injector => ({
  v6() {
    return $injector.get('OvhApiMePaymentMeanPaypalV6');
  },
}));
