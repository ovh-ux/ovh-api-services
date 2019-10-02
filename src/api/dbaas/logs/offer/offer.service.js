angular.module('ovh-api-services').service('OvhApiDbaasLogsOffer', ($injector) => ({
  v6() {
    return $injector.get('OvhApiDbaasLogsOfferV6');
  },
  Iceberg() {
    return $injector.get('OvhApiDbaasLogsOfferIceberg');
  },
}));
