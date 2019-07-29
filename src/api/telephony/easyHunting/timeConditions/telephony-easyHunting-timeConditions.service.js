angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingTimeConditions', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingTimeConditionsV6');
  },
  Conditions() {
    return $injector.get('OvhApiTelephonyEasyHuntingTimeConditionsConditions');
  },
}));
