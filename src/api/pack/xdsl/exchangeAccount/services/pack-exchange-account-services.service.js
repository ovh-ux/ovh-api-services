angular.module('ovh-api-services').service('OvhApiPackXdslExchangeAccountServices', $injector => ({
  v6() {
    return $injector.get('OvhApiPackXdslExchangeAccountServicesV6');
  },
}));
