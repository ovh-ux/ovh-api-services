angular.module('ovh-api-services').service('OvhApiTelephonySchedulerEvents', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonySchedulerEventsV6');
  },
}));
