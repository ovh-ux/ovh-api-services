angular
  .module('ovh-api-services')
  .service('OvhApiOrderUpgradeBaremetalPublicBandwidth', $injector => ({
    v6() {
      return $injector.get('OvhApiOrderUpgradeBaremetalPublicBandwidthV6');
    },
  }));
