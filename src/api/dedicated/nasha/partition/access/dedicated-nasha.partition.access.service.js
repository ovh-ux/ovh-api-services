angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartitionAccess', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedNashaPartitionAccessV6');
  },
  Aapi() {
    return $injector.get('OvhApiDedicatedNashaPartitionAccessAapi');
  },
}));
