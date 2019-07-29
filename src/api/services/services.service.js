angular.module('ovh-api-services').service('OvhApiServices', $injector => ({
  Aapi() {
    return $injector.get('OvhApiServicesAapi');
  },
  v6() {
    return $injector.get('OvhApiServicesV6');
  },
}));
