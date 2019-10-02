angular.module('ovh-api-services').service('OvhApiMePaymentMean', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMePaymentMeanV6');
  },
  BankAccount() {
    return $injector.get('OvhApiMePaymentMeanBankAccount');
  },
  CreditCard() {
    return $injector.get('OvhApiMePaymentMeanCreditCard');
  },
  DeferredPaymentAccount() {
    return $injector.get('OvhApiMePaymentMeanDeferredPaymentAccount');
  },
  Paypal() {
    return $injector.get('OvhApiMePaymentMeanPaypal');
  },
}));
