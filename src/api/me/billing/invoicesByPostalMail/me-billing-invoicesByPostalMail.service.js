angular.module('ovh-api-services').service('OvhApiMeBillingInvoicesByPostalMail', $injector => ({
  v6() {
    return $injector.get('OvhApiMeBillingInvoicesByPostalMailV6');
  },
}));
