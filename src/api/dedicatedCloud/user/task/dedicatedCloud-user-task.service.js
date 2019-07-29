angular.module('ovh-api-services').service('OvhApiDedicatedCloudUserTask', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudUserTaskV6');
  },
}));
