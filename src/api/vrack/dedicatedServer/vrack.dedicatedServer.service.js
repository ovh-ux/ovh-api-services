angular.module('ovh-api-services').service('OvhApiVrackDedicatedServer', ($injector) => ({
  v6() {
    return $injector.get('OvhApiVrackDedicatedServerV6');
  },
}));
