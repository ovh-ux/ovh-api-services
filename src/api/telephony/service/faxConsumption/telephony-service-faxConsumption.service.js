angular.module('ovh-api-services').service('OvhApiTelephonyServiceFaxConsumption', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyServiceFaxConsumptionV6');
  },
}));
