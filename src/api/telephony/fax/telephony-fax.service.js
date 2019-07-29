angular.module('ovh-api-services').service('OvhApiTelephonyFax', $injector => ({
  v6() {
    return $injector.get('OvhApiTelephonyFaxV6');
  },
  Aapi() {
    return $injector.get('OvhApiTelephonyFaxAapi');
  },
  v7() {
    return $injector.get('OvhApiTelephonyFaxV7');
  },
  Campaigns() {
    return $injector.get('OvhApiTelephonyFaxCampaigns');
  },
}));
