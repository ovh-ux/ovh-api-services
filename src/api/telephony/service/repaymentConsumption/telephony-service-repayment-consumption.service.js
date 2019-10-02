angular.module('ovh-api-services').service('OvhApiTelephonyServiceRepaymentConsumption', ($injector) => ({
  Aapi() {
    return $injector.get('OvhApiTelephonyServiceRepaymentConsumptionAapi');
  },
  v6() {
    return $injector.get('OvhApiTelephonyServiceRepaymentConsumptionV6');
  },
}));
