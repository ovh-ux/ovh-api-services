angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartitionSnapshot', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedNashaPartitionSnapshotV6');
  },
}));
