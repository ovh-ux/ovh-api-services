angular.module('ovh-api-services').service('OvhApiMeDebtAccountDebtOperation', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeDebtAccountDebtOperationV6');
  },
}));
