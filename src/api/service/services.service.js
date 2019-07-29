angular.module('ovh-api-services').service('OvhApiService', $injector => ({
  Aapi() {
    return $injector.get('OvhApiServiceAapi');
  },
}));
