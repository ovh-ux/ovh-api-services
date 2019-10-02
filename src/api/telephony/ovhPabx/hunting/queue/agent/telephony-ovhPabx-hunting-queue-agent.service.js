angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHuntingQueueAgent', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingQueueAgentV6');
  },
}));
