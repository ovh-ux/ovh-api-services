angular.module('ovh-api-services').service('OvhApiCloudDBEnterpriseOffers', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudDBEnterpriseOffersV6');
  },
}));
