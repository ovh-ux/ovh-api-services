angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingTimeConditionsConditions', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingTimeConditionsConditionsV6');
  },
}));
