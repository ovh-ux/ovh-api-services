angular.module('ovh-api-services').service('OvhApiEmailProV7', (apiv7) => {
  const emailproEndpoint = apiv7('/email/pro/:serviceName/', {
    serviceName: '@serviceName',
  });

  return emailproEndpoint;
});
