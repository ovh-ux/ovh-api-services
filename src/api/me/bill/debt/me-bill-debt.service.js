angular.module('ovh-api-services').service('OvhApiMeBillDebt', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeBillDebtV6');
  },
  Operation() {
    return $injector.get('OvhApiMeBillDebtOperation');
  },
}));
