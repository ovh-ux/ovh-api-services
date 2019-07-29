angular.module('ovh-api-services').service('OvhApiTelephonyHistoryTollfreeConsumption', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyHistoryTollfreeConsumptionV6');
  },
}));
