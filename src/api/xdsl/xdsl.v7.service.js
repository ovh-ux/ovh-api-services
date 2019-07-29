angular.module('ovh-api-services').service('OvhApiXdslV7', (apiv7) => {
  const xdslEndpoint = apiv7('/xdsl/:serviceName', {
    serviceName: '@serviceName',
  });

  return xdslEndpoint;
});
