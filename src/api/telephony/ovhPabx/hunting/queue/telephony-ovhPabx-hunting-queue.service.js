angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHuntingQueue', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingQueueV6');
  },
  Agent() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingQueueAgent');
  },
  LiveCalls() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingQueueLiveCalls');
  },
}));
