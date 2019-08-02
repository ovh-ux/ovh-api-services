angular.module('ovh-api-services').service('OvhApiVrackNasha', $injector => ({
  v6() {
    return $injector.get('OvhApiVrackNashaV6');
  },
}));
