angular.module('ovh-api-services').service('OvhApiDedicatedCloudVRack', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudVRackV6');
  },
}));
