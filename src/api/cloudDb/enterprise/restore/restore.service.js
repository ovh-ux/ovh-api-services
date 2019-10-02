angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseRestore', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseRestoreV6');
  },
}));
