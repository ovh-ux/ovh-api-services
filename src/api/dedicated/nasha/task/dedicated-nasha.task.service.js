angular.module('ovh-api-services').service('OvhApiDedicatedNashaTask', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedNashaTaskV6');
  },
}));
