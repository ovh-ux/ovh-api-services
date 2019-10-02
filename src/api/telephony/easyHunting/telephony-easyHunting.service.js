angular.module('ovh-api-services').service('OvhApiTelephonyEasyHunting', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingV6');
  },
  Sound() {
    return $injector.get('OvhApiTelephonyEasyHuntingSound');
  },
  Hunting() {
    return $injector.get('OvhApiTelephonyEasyHuntingHunting');
  },
  ScreenListConditions() {
    return $injector.get('OvhApiTelephonyEasyHuntingScreenListConditions');
  },
  TimeConditions() {
    return $injector.get('OvhApiTelephonyEasyHuntingTimeConditions');
  },
  Records() {
    return $injector.get('OvhApiTelephonyEasyHuntingRecords');
  },
}));
