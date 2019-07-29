angular.module('ovh-api-services').service('OvhApiEmailExchange', $injector => ({
  service() {
    return $injector.get('OvhApiEmailExchangeService');
  },
}));
