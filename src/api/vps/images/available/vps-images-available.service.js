angular.module('ovh-api-services').service('OvhApiVpsImagesAvailable', ($injector) => ({
  v6() {
    return $injector.get('OvhApiVpsImagesAvailableV6');
  },
}));
