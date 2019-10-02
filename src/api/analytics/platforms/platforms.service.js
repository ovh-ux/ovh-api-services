angular.module('ovh-api-services').service('OvhApiAnalyticsPlatforms', ($injector) => ({
  v6() {
    return $injector.get('OvhApiAnalyticsPlatformsV6');
  },
  Node() {
    return $injector.get('OvhApiAnalyticsPlatformsNode');
  },
}));
