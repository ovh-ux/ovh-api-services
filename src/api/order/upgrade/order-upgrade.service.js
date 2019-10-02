angular
  .module('ovh-api-services')
  .service('OvhApiOrderUpgrade', ($injector) => ({
    MicrosoftExchange() {
      return $injector.get('OvhApiOrderUpgradeMicrosoftExchange');
    },
    Vps() {
      return $injector.get('OvhApiOrderVps');
    },
    PrivateCloud() {
      return $injector.get('OvhApiOrderUpgradePrivateCloud');
    },
    BaremetalPublicBandwidth() {
      return $injector.get('OvhApiOrderUpgradeBaremetalPublicBandwidth');
    },
    BaremetalPrivateBandwidth() {
      return $injector.get('OvhApiOrderUpgradeBaremetalPrivateBandwidth');
    },
  }));
