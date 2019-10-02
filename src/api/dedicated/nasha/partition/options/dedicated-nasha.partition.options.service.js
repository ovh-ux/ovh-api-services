angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartitionOptions', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedNashaPartitionOptionsV6');
  },
}));
