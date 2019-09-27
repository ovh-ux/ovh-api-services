angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseHost', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseHostV6');
  },
}));
