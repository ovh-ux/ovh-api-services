angular.module('ovh-api-services').service('OvhApiXdslModemLanDhcp', $injector => ({
  v6() {
    return $injector.get('OvhApiXdslModemLanDhcpV6');
  },
  Aapi() {
    return $injector.get('OvhApiXdslModemLanDhcpAapi');
  },
  DHCPStaticAddress() {
    return $injector.get('OvhApiXdslModemLanDhcpDHCPStaticAddresses');
  },
}));
