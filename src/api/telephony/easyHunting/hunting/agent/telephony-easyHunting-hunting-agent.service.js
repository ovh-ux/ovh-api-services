angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingAgent', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingAgentV6');
  },
  Queue() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingAgentQueue');
  },
}));
