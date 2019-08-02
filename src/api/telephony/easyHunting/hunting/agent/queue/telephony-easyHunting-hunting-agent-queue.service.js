angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingAgentQueue', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingAgentQueueV6');
  },
}));
