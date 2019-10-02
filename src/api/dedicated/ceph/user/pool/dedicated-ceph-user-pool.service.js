angular.module('ovh-api-services').service('OvhApiDedicatedCephUserPool', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCephUserPoolV6');
  },
}));
