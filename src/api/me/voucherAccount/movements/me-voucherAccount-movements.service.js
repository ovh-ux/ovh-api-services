angular.module('ovh-api-services').service('OvhApiMeVoucherAccountMovements', $injector => ({
  v6() {
    return $injector.get('OvhApiMeVoucherAccountMovementsV6');
  },
}));
