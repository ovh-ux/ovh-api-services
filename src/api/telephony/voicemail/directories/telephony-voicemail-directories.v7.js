angular.module('ovh-api-services').service('OvhApiTelephonyVoicemailDirectoriesV7', (apiv7) => apiv7('/telephony/:billingAccount/voicemail/:serviceName/directories/:id', {
  billingAccount: '@billingAccount',
  serviceName: '@serviceName',
  id: '@id',
}));
