angular.module('ovh-api-services').service('OvhApiMePaymentMeanDeferredPaymentAccount', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMePaymentMeanDeferredPaymentAccountV6');
  },
}));
