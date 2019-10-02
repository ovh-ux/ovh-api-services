angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxHunting', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingV6');
  },
  Queue() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingQueue');
  },
  Agent() {
    return $injector.get('OvhApiTelephonyOvhPabxHuntingAgent');
  },
}));
