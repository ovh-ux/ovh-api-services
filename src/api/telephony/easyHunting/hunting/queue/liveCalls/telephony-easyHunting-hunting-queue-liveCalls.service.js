angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV6');
  },
}));
