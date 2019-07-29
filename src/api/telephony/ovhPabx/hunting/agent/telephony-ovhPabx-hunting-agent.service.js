angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHuntingAgent', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingAgentV6');
  },
  Queue() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingAgentQueue');
  },
}));
