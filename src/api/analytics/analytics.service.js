angular.module('ovh-api-services').service('OvhApiAnalytics', $injector => ({
  Platforms() {
    return $injector.get('OvhApiAnalyticsPlatforms');
  },
  Capabilities() {
    return $injector.get('OvhApiAnalyticsCapabilities');
  },
}));
