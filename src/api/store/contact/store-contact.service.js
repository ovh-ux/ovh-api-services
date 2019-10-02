angular.module('ovh-api-services').service('OvhApiStoreContact', ($injector) => ({
  v6() {
    return $injector.get('OvhApiStoreContactV6');
  },
}));
