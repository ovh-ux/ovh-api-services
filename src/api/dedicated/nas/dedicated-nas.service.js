angular.module('ovh-api-services').service('OvhApiDedicatedNas', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedNasV6');
  },
}));
