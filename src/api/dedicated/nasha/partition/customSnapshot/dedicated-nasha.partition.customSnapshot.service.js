angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartitionCustomSnapshot', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedNashaPartitionCustomSnapshotV6');
  },
}));
