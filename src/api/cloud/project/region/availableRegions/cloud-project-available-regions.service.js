angular.module('ovh-api-services').service('OvhApiCloudProjectAvailableRegions', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectAvailableRegionsV6');
  },
}));
