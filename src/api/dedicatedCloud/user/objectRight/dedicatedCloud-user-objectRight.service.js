angular.module('ovh-api-services').service('OvhApiDedicatedCloudUserObjectRight', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudUserObjectRightV6');
  },
}));
