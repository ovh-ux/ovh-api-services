angular.module('ovh-api-services').service('OvhApiTelephonyServiceVoiceConsumption', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyServiceVoiceConsumptionV6');
  },
  v7() {
    return $injector.get('OvhApiTelephonyServiceVoiceConsumptionV7');
  },
  Aapi() {
    return $injector.get('OvhApiTelephonyServiceVoiceConsumptionAapi');
  },
}));
