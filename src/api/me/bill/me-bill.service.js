angular.module('ovh-api-services').service('OvhApiMeBill', ($injector) => ({
  Iceberg() {
    return $injector.get('OvhApiMeBillIceberg');
  },
  v6() {
    return $injector.get('OvhApiMeBillV6');
  },
  Details() {
    return $injector.get('OvhApiMeBillDetails');
  },
  Debt() {
    return $injector.get('OvhApiMeBillDebt');
  },
}));
