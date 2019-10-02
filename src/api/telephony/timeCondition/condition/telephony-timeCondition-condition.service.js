angular.module('ovh-api-services').service('OvhApiTelephonyTimeConditionCondition', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyTimeConditionConditionV6');
  },
}));
