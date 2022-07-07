angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingQueueAgent', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingQueueAgentV6');
  },
}));
