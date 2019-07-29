angular.module('ovh-api-services').service('OvhApiFreeFaxV7', (apiv7) => {
  const freeFaxEndpoint = apiv7('/freefax/:serviceName', {
    serviceName: '@serviceName',
  });

  return freeFaxEndpoint;
});
