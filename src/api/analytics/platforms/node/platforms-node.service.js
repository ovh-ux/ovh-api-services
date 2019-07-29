angular.module('ovh-api-services').service('OvhApiAnalyticsPlatformsNode', $injector => ({
  v6() {
    return $injector.get('OvhApiAnalyticsPlatformsNodeV6');
  },
}));
