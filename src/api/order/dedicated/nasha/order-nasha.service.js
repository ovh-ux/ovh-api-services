angular.module('ovh-api-services').service('OvhApiOrderDedicatedNasha', $injector => ({
  v6: angular.noop,
  New() {
    return $injector.get('OvhApiOrderDedicatedNashaNew');
  },
}));
