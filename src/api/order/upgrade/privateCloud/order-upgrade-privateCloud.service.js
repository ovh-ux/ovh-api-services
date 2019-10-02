angular
  .module('ovh-api-services')
  .service('OvhApiOrderUpgradePrivateCloud', ($injector) => ({
    v6() {
      return $injector.get('OvhApiOrderUpgradePrivateCloudV6');
    },
  }));
