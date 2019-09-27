angular.module('ovh-api-services').service('OvhApiCloudDBEnterprise', $injector => ({
  Backup() {
    return $injector.get('OvhApiCloudDBEnterpriseBackup');
  },
  Endpoint() {
    return $injector.get('OvhApiCloudDBEnterpriseEndpoint');
  },
  Host() {
    return $injector.get('OvhApiCloudDBEnterpriseHost');
  },
  Logs() {
    return $injector.get('OvhApiCloudDBEnterpriseLogs');
  },
  Maintenance() {
    return $injector.get('OvhApiCloudDBEnterpriseMaintenance');
  },
  MaintenanceWindow() {
    return $injector.get('OvhApiCloudDBEnterpriseMaintenanceWindow');
  },
  Offers() {
    return $injector.get('OvhApiCloudDBEnterpriseOffers');
  },
  Region() {
    return $injector.get('OvhApiCloudDBEnterpriseRegion');
  },
  Restore() {
    return $injector.get('OvhApiCloudDBEnterpriseRestore');
  },
  SecurityGroup() {
    return $injector.get('OvhApiCloudDBEnterpriseSecurityGroup');
  },
  ServiceInfos() {
    return $injector.get('OvhApiCloudDBEnterpriseServiceInfos');
  },
  User() {
    return $injector.get('OvhApiCloudDBEnterpriseUser');
  },
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseClusterV6');
  },
}));
