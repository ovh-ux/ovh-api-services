angular.module('ovh-api-services').service('OvhApiDedicatedServer', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedServerV6');
  },
  Aapi() {
    return $injector.get('OvhApiDedicatedServerAapi');
  },
  Nic() {
    return $injector.get('OvhApiDedicatedServerNic');
  },
  Vni() {
    return $injector.get('OvhApiDedicatedServerVni');
  },
}));
