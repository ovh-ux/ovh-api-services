angular.module('ovh-api-services').service('OvhApiKube', ($injector) => ({
  v6() {
    return $injector.get('OvhApiKubeV6');
  },
  PublicCloud() {
    return $injector.get('OvhApiKubePublicCloud');
  },
}));
