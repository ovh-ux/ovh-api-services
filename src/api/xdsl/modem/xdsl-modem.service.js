angular.module('ovh-api-services').service('OvhApiXdslModem', ($injector, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModem');

  return {
    v6() {
      return $injector.get('OvhApiXdslModemV6');
    },
    Aapi() {
      return $injector.get('OvhApiXdslModemAapi');
    },
    resetCache() {
      cache.removeAll();
    },
    ConnectedDevices() {
      return $injector.get('OvhApiXdslModemDevices');
    },
    Lan() {
      return $injector.get('OvhApiXdslModemLan');
    },
    Port() {
      return $injector.get('OvhApiXdslModemPort');
    },
    Reboot() {
      return $injector.get('OvhApiXdslModemReboot');
    },
    Reset() {
      return $injector.get('OvhApiXdslModemReset');
    },
    Wifi() {
      return $injector.get('OvhApiXdslModemWifi');
    },
    AvailableWLANChannel() {
      return $injector.get('OvhApiXdslModemAvailableWLANChannel');
    },
    Firmware() {
      return $injector.get('OvhApiXdslModemFirmware');
    },
    BlocIp() {
      return $injector.get('OvhApiXdslModemBlocIp');
    },
    CallWaiting() {
      return $injector.get('OvhApiXdslModemCallWaiting');
    },
    ContentSharing() {
      return $injector.get('OvhApiXdslModemContentSharing');
    },
    Ftp() {
      return $injector.get('OvhApiXdslModemFtp');
    },
    IpsecAlg() {
      return $injector.get('OvhApiXdslModemIpsecAlg');
    },
    SipAlg() {
      return $injector.get('OvhApiXdslModemSipAlg');
    },
    Upnp() {
      return $injector.get('OvhApiXdslModemUpnp');
    },
    cache,
    AvailableACSBackend() {
      return $injector.get('OvhApiXdslModemAvailableACSBackend');
    },
  };
});
