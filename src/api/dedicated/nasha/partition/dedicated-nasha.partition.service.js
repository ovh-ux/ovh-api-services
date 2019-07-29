angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartition', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedNashaPartitionV6');
  },
  CustomSnapshot() {
    return $injector.get('OvhApiDedicatedNashaPartitionCustomSnapshot');
  },
  Snapshot() {
    return $injector.get('OvhApiDedicatedNashaPartitionSnapshot');
  },
  Access() {
    return $injector.get('OvhApiDedicatedNashaPartitionAccess');
  },
  Options() {
    return $injector.get('OvhApiDedicatedNashaPartitionOptions');
  },
}));
