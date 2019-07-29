

angular.module('ovh-api-services').service('OvhApiTelephonyVxmlV6', $resource => $resource('/telephony/:billingAccount/vxml/:serviceName', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
}, {
  settings: {
    method: 'GET',
    url: '/telephony/:billingAccount/vxml/:serviceName/settings',
    isArray: false,
  },
  save: {
    method: 'PUT',
    url: '/telephony/:billingAccount/vxml/:serviceName/settings',
    isArray: false,
  },
}));
