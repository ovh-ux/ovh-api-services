angular.module('ovh-api-services').service('OvhApiTelephonyTrunkV6', ($resource) => $resource('/telephony/:billingAccount/trunk/:serviceName', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
}, {
  getChannelsPacksRepartition: {
    method: 'GET',
    url: '/telephony/:billingAccount/trunk/:serviceName/channelsPacksRepartition',
    isArray: false,
  },
}));
