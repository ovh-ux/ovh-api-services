angular.module('ovh-api-services').service('OvhApiTelephonyHistoryRepaymentConsumption', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyHistoryRepaymentConsumptionV6');
  },
}));
