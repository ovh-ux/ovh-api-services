angular.module('ovh-api-services').service('OvhApiTelephonyService', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyServiceV6');
  },
  v7() {
    return $injector.get('OvhApiTelephonyServiceV7');
  },
  VoiceConsumption() {
    return $injector.get('OvhApiTelephonyServiceVoiceConsumption');
  },
  FaxConsumption() {
    return $injector.get('OvhApiTelephonyServiceFaxConsumption');
  },
  Task() {
    return $injector.get('OvhApiTelephonyServiceTask');
  },
  OfferTask() {
    return $injector.get('OvhApiTelephonyServiceOfferTask');
  },
  RepaymentConsumption() {
    return $injector.get('OvhApiTelephonyServiceRepaymentConsumption');
  },
}));
