angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterBackup', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedCloudDatacenterBackupV6');
  },
}));
