angular.module('ovh-api-services').service('OvhApiXdslModemLanDhcpDHCPStaticAddresses', ($injector) => ({
  v6() {
    return $injector.get('OvhApiXdslModemLanDhcpDHCPStaticAddressesV6');
  },
}));
