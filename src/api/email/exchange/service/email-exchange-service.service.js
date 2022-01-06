angular.module('ovh-api-services').service('OvhApiEmailExchangeService', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiEmailExchangeServiceAapi');
  },
  v6() {
    return $injector.get('OvhApiEmailExchangeServiceV6');
  },
  server() {
    return $injector.get('OvhApiEmailExchangeServiceServer');
  },
}));
