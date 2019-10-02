angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterZertoSingle', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudDatacenterZertoSingleV6');
  },
}));
