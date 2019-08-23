angular.module('ovh-api-services').service('OvhApiOvhProduct', $injector => ({
  Aapi() {
    return $injector.get('OvhApiOvhProductAapi');
  },
}));
