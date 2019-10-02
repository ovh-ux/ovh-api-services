angular.module('ovh-api-services').service('OvhApiDedicatedCloudVlan', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudVlanV6');
  },
}));
