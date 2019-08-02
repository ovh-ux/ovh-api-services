angular.module('ovh-api-services').service('OvhApiCloudProjectVolumeSnapshot', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectVolumeSnapshotV6');
  },
}));
