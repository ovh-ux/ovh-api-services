angular.module('ovh-api-services').service('OvhApiXdslLinesV7', (apiv7) => {
  const xdslLinesEndpoint = apiv7('/xdsl/:serviceName/lines/:number', {
    serviceName: '@serviceName',
    number: '@number',
  });

  return xdslLinesEndpoint;
});
