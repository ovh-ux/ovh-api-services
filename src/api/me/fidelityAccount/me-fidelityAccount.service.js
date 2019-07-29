angular.module('ovh-api-services').service('OvhApiMeFidelityAccount', $injector => ({
  v6() {
    return $injector.get('OvhApiMeFidelityAccountV6');
  },
}));
