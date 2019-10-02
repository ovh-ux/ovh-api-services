angular.module('ovh-api-services').service('OvhApiVrackDedicatedConnect', ($injector) => ({
  v6() {
    return $injector.get('OvhApiVrackDedicatedConnectV6');
  },
}));
