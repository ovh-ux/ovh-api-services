angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV6');
  },
  v7() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV7');
  },
}));
