angular.module('ovh-api-services').service('OvhApiTelephonyScheduler', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonySchedulerV6');
  },
  Events() {
    return $injector.get('OvhApiTelephonySchedulerEvents');
  },
}));
