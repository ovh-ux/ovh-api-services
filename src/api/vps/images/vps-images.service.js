angular.module('ovh-api-services').service('OvhApiVpsImages', $injector => ({
  v6() {
    return $injector.get('OvhApiVpsImagesV6');
  },
  Available() {
    return $injector.get('OvhApiVpsImagesAvailable');
  },
}));
