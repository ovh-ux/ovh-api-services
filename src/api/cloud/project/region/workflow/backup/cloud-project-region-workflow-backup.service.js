angular.module('ovh-api-services').service('OvhApiCloudProjectRegionWorkflowBackup', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectRegionWorkflowBackupV6');
  },
}));
