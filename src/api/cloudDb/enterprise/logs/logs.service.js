angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseLogs', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseLogsV6');
  },
}));
