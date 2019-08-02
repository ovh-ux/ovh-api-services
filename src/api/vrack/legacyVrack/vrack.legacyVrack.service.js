angular.module('ovh-api-services').service('OvhApiVrackLegacyVrack', $injector => ({
  v6() {
    return $injector.get('OvhApiVrackLegacyVrackV6');
  },
}));
