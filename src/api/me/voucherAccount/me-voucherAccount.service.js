angular.module('ovh-api-services').service('OvhApiMeVoucherAccount', $injector => ({
  v6() {
    return $injector.get('OvhApiMeVoucherAccountV6');
  },
  Movements() {
    return $injector.get('OvhApiMeVoucherAccountMovements');
  },
}));
