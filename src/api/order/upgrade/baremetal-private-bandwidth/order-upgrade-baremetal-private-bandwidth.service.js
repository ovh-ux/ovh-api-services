angular
  .module('ovh-api-services')
  .service('OvhApiOrderUpgradeBaremetalPrivateBandwidth', $injector => ({
    v6() {
      return $injector.get('OvhApiOrderUpgradeBaremetalPrivateBandwidthV6');
    },
  }));
