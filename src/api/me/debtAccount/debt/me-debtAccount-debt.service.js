angular.module('ovh-api-services').service('OvhApiMeDebtAccountDebt', $injector => ({
  v6() {
    return $injector.get('OvhApiMeDebtAccountDebtV6');
  },
  Operation() {
    return $injector.get('OvhApiMeDebtAccountDebtOperation');
  },
}));
