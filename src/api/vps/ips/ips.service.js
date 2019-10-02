angular.module('ovh-api-services').service('OvhApiVpsIps', ($injector) => ({
  v6() {
    return $injector.get('OvhApiVpsIpsV6');
  },
}));
