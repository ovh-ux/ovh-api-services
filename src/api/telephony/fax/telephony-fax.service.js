angular.module('ovh-api-services').service('OvhApiTelephonyFax', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyFaxV6');
  },
  Aapi() {
    return $injector.get('OvhApiTelephonyFaxAapi');
  },
  Campaigns() {
    return $injector.get('OvhApiTelephonyFaxCampaigns');
  },
}));
