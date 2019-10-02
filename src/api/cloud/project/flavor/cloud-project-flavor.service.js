angular.module('ovh-api-services').service('OvhApiCloudProjectFlavor', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectFlavorV6');
  },
}));
