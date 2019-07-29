angular.module('ovh-api-services').service('OvhApiTelephonyHistoryConsumption', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyHistoryConsumptionV6');
  },
}));
