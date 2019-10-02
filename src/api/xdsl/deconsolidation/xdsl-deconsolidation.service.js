angular.module('ovh-api-services').service('OvhApiXdslDeconsolidation', ($injector) => ({
  v6() {
    return $injector.get('OvhApiXdslDeconsolidationV6');
  },
  Aapi() {
    return angular.noop;
  },
}));
