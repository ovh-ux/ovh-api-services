angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseBackup', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseBackupV6');
  },
  Iceberg() {
    return $injector.get('OvhApiCloudDBEnterpriseBackupIceberg');
  },
}));
