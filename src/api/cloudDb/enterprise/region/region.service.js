angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseRegion', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseRegionV6');
  },
}));
