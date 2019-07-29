angular.module('ovh-api-services').service('OvhApiOrder', $injector => ({
  Cart() {
    return $injector.get('OvhApiOrderCart');
  },
  CartServiceOption() {
    return $injector.get('OvhApiOrderCartServiceOption');
  },
  CatalogFormatted() {
    return $injector.get('OvhApiOrderCatalogFormatted');
  },
  DedicatedNasha() {
    return $injector.get('OvhApiOrderDedicatedNasha');
  },
  Freefax() {
    return $injector.get('OvhApiOrderFreefax');
  },
  License() {
    return $injector.get('OvhApiOrderLicense');
  },
  Router() {
    return $injector.get('OvhApiOrderRouter');
  },
  Sms() {
    return $injector.get('OvhApiOrderSms');
  },
  Telephony() {
    return $injector.get('OvhApiOrderTelephony');
  },
  Vrack() {
    return $injector.get('OvhApiOrderVrack');
  },
  Upgrade() {
    return $injector.get('OvhApiOrderUpgrade');
  },
  v6() {
    return $injector.get('OvhApiOrderV6');
  },
}));
