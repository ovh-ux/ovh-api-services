angular.module('ovh-api-services').service('OvhApiCloudProjectSnapshot', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectSnapshotV6');
  },
}));
