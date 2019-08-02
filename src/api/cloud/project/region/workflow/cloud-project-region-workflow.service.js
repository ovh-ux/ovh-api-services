angular.module('ovh-api-services').service('OvhApiCloudProjectRegionWorkflow', $injector => ({
  Backup() {
    return $injector.get('OvhApiCloudProjectRegionWorkflowBackup');
  },
}));
