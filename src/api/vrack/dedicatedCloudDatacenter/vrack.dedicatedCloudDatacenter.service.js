angular.module('ovh-api-services').service('OvhApiVrackDedicatedCloudDatacenter', ($injector) => ({
  v6() {
    return $injector.get('OvhApiVrackDedicatedCloudDatacenterV6');
  },
}));
