angular.module('ovh-api-services').service('OvhApiDomainV7', (apiv7) => {
  const domainEndpoint = apiv7('/domain/:serviceName', {
    serviceName: '@serviceName',
  });

  return domainEndpoint;
});
