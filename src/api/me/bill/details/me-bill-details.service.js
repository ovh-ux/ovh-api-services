angular.module('ovh-api-services').service('OvhApiMeBillDetails', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeBillDetailsV6');
  },
}));
