angular.module('ovh-api-services').service('OvhApiTelephonyConferenceWebAccessV6', ($resource) => $resource('/telephony/:billingAccount/conference/:serviceName/webAccess/:id', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  id: '@id',
}, {
  query: {
    method: 'GET',
    isArray: true,
  },
  get: {
    method: 'GET',
  },
  create: {
    method: 'POST',
  },
  remove: {
    method: 'DELETE',
  },
}));
