angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseBackupIceberg', iceberg => iceberg('/cloudDB/enterprise/cluster/:clusterId/backup/:backupId', {
  clusterId: '@clusterId',
  backupId: '@backupId',
}));
