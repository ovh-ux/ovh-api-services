angular.module('ovh-api-services').service('OvhApiVrack', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiVrackAapi');
  },
  v6() {
    return $injector.get('OvhApiVrackV6');
  },
  CloudProject() {
    return $injector.get('OvhApiVrackCloudProject');
  },
  DedicatedCloud() {
    return $injector.get('OvhApiVrackDedicatedCloud');
  },
  DedicatedServer() {
    return $injector.get('OvhApiVrackDedicatedServer');
  },
  DedicatedServerInterface() {
    return $injector.get('OvhApiDedicatedServerInterface');
  },
  DedicatedConnect() {
    return $injector.get('OvhApiVrackDedicatedConnect');
  },
  Ip() {
    return $injector.get('OvhApiVrackIp');
  },
  LegacyVrack() {
    return $injector.get('OvhApiVrackLegacyVrack');
  },
  Nasha() {
    return $injector.get('OvhApiVrackNasha');
  },
  IpLoadBalancing() {
    return $injector.get('OvhApiVrackIpLoadBalancing');
  },
}));
