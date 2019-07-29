angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenter', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudDatacenterV6');
  },
  Filer() {
    return $injector.get('OvhApiDedicatedCloudDatacenterFiler');
  },
  Host() {
    return $injector.get('OvhApiDedicatedCloudDatacenterHost');
  },
  DisasterRecovery() {
    return $injector.get('OvhApiDedicatedCloudDatacenterDisasterRecovery');
  },
  Backup() {
    return $injector.get('OvhApiDedicatedCloudDatacenterBackup');
  },
  Zerto() {
    return $injector.get('OvhApiDedicatedCloudDatacenterZerto');
  },
}));
