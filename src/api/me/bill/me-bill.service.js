angular.module('ovh-api-services').service('OvhApiMeBill', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiMeBillAapi');
  },
  Iceberg() {
    return $injector.get('OvhApiMeBillIceberg');
  },
  v6() {
    return $injector.get('OvhApiMeBillV6');
  },
  v7() {
    return $injector.get('OvhApiMeBillV7');
  },
  Details() {
    return $injector.get('OvhApiMeBillDetails');
  },
  Debt() {
    return $injector.get('OvhApiMeBillDebt');
  },
}));
