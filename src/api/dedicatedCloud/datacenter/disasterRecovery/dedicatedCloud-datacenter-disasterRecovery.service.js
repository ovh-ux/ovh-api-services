angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterDisasterRecovery', ($injector) => ({
  Zerto() {
    return $injector.get('OvhApiDedicatedCloudDatacenterDisasterRecoveryZerto');
  },
}));
