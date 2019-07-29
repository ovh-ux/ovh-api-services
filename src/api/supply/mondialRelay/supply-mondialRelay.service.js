angular.module('ovh-api-services').service('OvhApiSupplyMondialRelay', $injector => ({
  v6() {
    return $injector.get('OvhApiSupplyMondialRelayV6');
  },
  Aapi() {
    return angular.noop();
  },
}));
