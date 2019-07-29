angular.module('ovh-api-services').service('OvhApiProducts', $injector => ({
  Aapi() {
    return $injector.get('OvhApiProductsAapi');
  },
}));
