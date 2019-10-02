angular.module('ovh-api-services').service('OvhApiDedicatedCephTask', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCephTaskV6');
  },
}));
