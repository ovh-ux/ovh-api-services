angular.module('ovh-api-services').service('OvhApiMeBillDebtOperation', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeBillDebtOperationV6');
  },
}));
