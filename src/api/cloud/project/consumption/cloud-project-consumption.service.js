angular.module('ovh-api-services').service('OvhApiCloudProjectConsumption', ($injector) => ({
  v6() {
    return $injector.get('OvhApiCloudProjectConsumptionV6');
  },
}));
