angular.module('ovh-api-services').service('OvhApiCloudProjectKubeFlavors', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectKubeFlavorsV6');
  },
}));
