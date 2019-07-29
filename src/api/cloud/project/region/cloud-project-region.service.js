angular.module('ovh-api-services').service('OvhApiCloudProjectRegion', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectRegionV6');
  },
  Workflow() {
    return $injector.get('OvhApiCloudProjectRegionWorkflow');
  },
  AvailableRegions() {
    return $injector.get('OvhApiCloudProjectAvailableRegions');
  },
}));
