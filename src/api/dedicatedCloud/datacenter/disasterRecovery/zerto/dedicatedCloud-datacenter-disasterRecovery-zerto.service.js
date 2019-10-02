angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterDisasterRecoveryZerto', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudDatacenterDisasterRecoveryZertoV6');
  },
}));
