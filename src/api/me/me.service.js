angular.module('ovh-api-services').service('OvhApiMe', $injector => ({
  v6() {
    return $injector.get('OvhApiMeV6');
  },
  Api() {
    return $injector.get('OvhApiMeApi');
  },
  AccessRestriction() {
    return $injector.get('OvhApiMeAccessRestriction');
  },
  Agreements() {
    return $injector.get('OvhApiMeAgreements');
  },
  Autorenew() {
    return $injector.get('OvhApiMeAutorenew');
  },
  SshKey() {
    return $injector.get('OvhApiMeSshKey');
  },
  Bill() {
    return $injector.get('OvhApiMeBill');
  },
  Billing() {
    return $injector.get('OvhApiMeBilling');
  },
  Order() {
    return $injector.get('OvhApiMeOrder');
  },
  OvhAccount() {
    return $injector.get('OvhApiMeOvhAccount');
  },
  FidelityAccount() {
    return $injector.get('OvhApiMeFidelityAccount');
  },
  PaymentMean() {
    return $injector.get('OvhApiMePaymentMean');
  },
  PaymentMethod() {
    return $injector.get('OvhApiMePaymentMethod');
  },
  AvailableAutomaticPaymentMeans() {
    return $injector.get('OvhApiMeAvailableAutomaticPaymentMeans');
  },
  Document() {
    return $injector.get('OvhApiMeDocument');
  },
  Contact() {
    return $injector.get('OvhApiMeContact');
  },
  Task() {
    return $injector.get('OvhApiMeTask');
  },
  Telephony() {
    return $injector.get('OvhApiMeTelephony');
  },
  Fax() {
    return $injector.get('OvhApiMeFax');
  },
  DepositRequest() {
    return $injector.get('OvhApiMeDepositRequest');
  },
  DebtAccount() {
    return $injector.get('OvhApiMeDebtAccount');
  },
  Identity() {
    return $injector.get('OvhApiMeIdentity');
  },
  Notification() {
    return $injector.get('OvhApiMeNotification');
  },
  Deposit() {
    return $injector.get('OvhApiMeDeposit');
  },
  Payment() {
    return $injector.get('OvhApiMePayment');
  },
  VoucherAccount() {
    return $injector.get('OvhApiMeVoucherAccount');
  },
}));
