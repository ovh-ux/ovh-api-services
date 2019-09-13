angular.module('ovh-api-services').service('OvhApiDedicatedServer', $injector => ({
  v6() {
    return $injector.get('OvhApiDedicatedServerV6');
  },
  Aapi() {
    return $injector.get('OvhApiDedicatedServerAapi');
  },
  PhysicalInterface() {
    return $injector.get('OvhApiDedicatedServerPhysicalInterface');
  },
  VirtualInterface() {
    return $injector.get('OvhApiDedicatedServerVirtualInterface');
  },
}));
