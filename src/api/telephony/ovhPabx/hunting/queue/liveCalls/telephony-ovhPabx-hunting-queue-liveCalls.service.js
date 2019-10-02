angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHuntingQueueLiveCalls', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingQueueLiveCallsV6');
  },
}));
