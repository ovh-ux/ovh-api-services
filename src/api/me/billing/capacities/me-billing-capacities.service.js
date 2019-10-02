angular.module('ovh-api-services').service('OvhApiMeBillingCapacities', ($injector) => ({
  v6() {
    return $injector.get('OvhApiMeBillingCapacitiesV6');
  },
}));
