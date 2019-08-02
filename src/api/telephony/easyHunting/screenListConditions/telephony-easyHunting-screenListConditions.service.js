angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingScreenListConditions', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingScreenListConditionsV6');
  },
  Conditions() {
    return $injector.get('OvhApiTelephonyEasyHuntingScreenListConditionsConditions');
  },
}));
