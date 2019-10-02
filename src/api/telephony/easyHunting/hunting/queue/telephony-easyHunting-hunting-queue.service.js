angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingQueue', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingQueueV6');
  },
  Agent() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingQueueAgent');
  },
  LiveCalls() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingQueueLiveCalls');
  },
}));
