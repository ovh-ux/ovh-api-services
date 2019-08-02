angular.module('ovh-api-services').service('OvhApiSmsV7', (apiv7) => {
  const smsEndpoint = apiv7('/sms/:serviceName', {
    serviceName: '@serviceName',
  });

  return smsEndpoint;
});
