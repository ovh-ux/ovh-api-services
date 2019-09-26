angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseMaintenance', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseMaintenanceV6');
  },
}));
