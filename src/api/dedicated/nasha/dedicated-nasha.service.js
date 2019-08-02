angular.module('ovh-api-services').service('OvhApiDedicatedNasha', $injector => ({
  Aapi() {
    return $injector.get('OvhApiDedicatedNashaAapi');
  },
  v6() {
    return $injector.get('OvhApiDedicatedNashaV6');
  },
  Partition() {
    return $injector.get('OvhApiDedicatedNashaPartition');
  },
  Task() {
    return $injector.get('OvhApiDedicatedNashaTask');
  },
}));
