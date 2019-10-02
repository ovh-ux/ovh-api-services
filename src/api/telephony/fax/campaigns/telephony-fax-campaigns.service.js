angular.module('ovh-api-services').service('OvhApiTelephonyFaxCampaigns', ($injector) => ({
  v6() {
    return $injector.get('OvhApiTelephonyFaxCampaignsV6');
  },
}));
