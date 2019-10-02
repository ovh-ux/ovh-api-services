angular.module('ovh-api-services').service('OvhApiMePaymentMeanBankAccount', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMePaymentMeanBankAccountV6');
  },
}));
