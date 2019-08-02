angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHuntingAgentQueue', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingAgentQueueV6');
  },
}));
