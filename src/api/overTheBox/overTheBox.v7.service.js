angular.module('ovh-api-services').service('OvhApiOverTheBoxV7', (apiv7) => {
  const otbEndpoint = apiv7('/overtTheBox/:serviceName', {
    serviceName: '@serviceName',
  });

  return otbEndpoint;
});
