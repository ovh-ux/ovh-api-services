angular.module('ovh-api-services').service('OvhApiMeBilling', $injector => ({
  Capacities() {
    return $injector.get('OvhApiMeBillingCapacities');
  },
  InvoicesByPostalMail() {
    return $injector.get('OvhApiMeBillingInvoicesByPostalMail');
  },
}));
