angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingScreenListConditionsConditions', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyEasyHuntingScreenListConditionsConditionsV6');
  },
}));
