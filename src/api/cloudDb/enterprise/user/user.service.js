angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseUser', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseUserV6');
  },
}));
