angular.module('ovh-api-services').service('OvhApiCloudProjectContainerRegistryPlan', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectContainerRegistryPlanV6');
  },
}));
