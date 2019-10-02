angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseMaintenanceWindow', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseMaintenanceWindowV6');
  },
}));
