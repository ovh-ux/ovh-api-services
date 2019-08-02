angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterZerto', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudDatacenterZertoV6');
  },
  Single() {
    return $injector.get('OvhApiDedicatedCloudDatacenterZertoSingle');
  },
}));
