angular.module('ovh-api-services').service('OvhApiCloudProjectUsageCurrent', $injector => ({
  v6() {
    return $injector.get('OvhApiCloudProjectUsageCurrentV6');
  },
}));
