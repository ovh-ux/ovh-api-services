angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHunting', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingV6');
  },
  Queue() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingQueue');
  },
  Agent() {
    return $injector.get('OvhApiTelephonyEasyHuntingHuntingAgent');
  },
}));
