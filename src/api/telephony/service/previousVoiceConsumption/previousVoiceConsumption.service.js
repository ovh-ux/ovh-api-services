angular.module('ovh-api-services').service('OvhApiTelephonyServicePreviousVoiceConsumption', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyServicePreviousVoiceConsumptionV6');
  },
}));
