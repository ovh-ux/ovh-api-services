angular.module('ovh-api-services').service('OvhApiMeDebtAccount', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeDebtAccountV6');
  },
  Debt() {
    return $injector.get('OvhApiMeDebtAccountDebt');
  },
}));
