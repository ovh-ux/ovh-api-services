angular.module('ovh-api-services').service('OvhApiVps', $injector => ({
  v6() {
    return $injector.get('OvhApiVpsV6');
  },
  Aapi() {
    return $injector.get('OvhApiVpsAapi');
  },
  Images() {
    return $injector.get('OvhApiVpsImages');
  },
  Ips() {
    return $injector.get('OvhApiVpsIps');
  },
}));
