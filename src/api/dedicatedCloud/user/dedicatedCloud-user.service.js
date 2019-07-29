angular.module('ovh-api-services').service('OvhApiDedicatedCloudUser', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudUserV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDedicatedCloudUserIceberg');
  },
  ObjectRight() {
    return $injector.get('OvhApiDedicatedCloudUserObjectRight');
  },
  Right() {
    return $injector.get('OvhApiDedicatedCloudUserRight');
  },
  Task() {
    return $injector.get('OvhApiDedicatedCloudUserTask');
  },
}));
