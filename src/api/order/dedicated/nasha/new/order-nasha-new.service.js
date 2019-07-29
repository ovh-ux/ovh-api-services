angular.module('ovh-api-services').service('OvhApiOrderDedicatedNashaNew', $injector => ({
  v6() {
    return $injector.get('OvhApiOrderDedicatedNashaNewV6');
  },
}));
