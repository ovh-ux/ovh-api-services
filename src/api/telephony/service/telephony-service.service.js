angular.module('ovh-api-services').service('OvhApiTelephonyService', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyServiceV6');
  },
  v7() {
    return $injector.get('OvhApiTelephonyServiceV7');
  },
  FaxConsumption() {
    return $injector.get('OvhApiTelephonyServiceFaxConsumption');
  },
  OfferTask() {
    return $injector.get('OvhApiTelephonyServiceOfferTask');
  },
  PreviousVoiceConsumption() {
    return $injector.get('OvhApiTelephonyServicePreviousVoiceConsumption');
  },
  RepaymentConsumption() {
    return $injector.get('OvhApiTelephonyServiceRepaymentConsumption');
  },
  Task() {
    return $injector.get('OvhApiTelephonyServiceTask');
  },
  VoiceConsumption() {
    return $injector.get('OvhApiTelephonyServiceVoiceConsumption');
  },
}));
