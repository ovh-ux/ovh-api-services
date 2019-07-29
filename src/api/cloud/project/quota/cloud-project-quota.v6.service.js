angular.module('ovh-api-services').service('OvhApiCloudProjectQuotaV6', ($resource) => {
  const quota = $resource('/cloud/project/:serviceName/quota', {
    serviceName: '@serviceName',
  }, {
    get: {
      method: 'GET',
    },
    query: {
      method: 'GET',
      isArray: true,
    },
  });

  return quota;
});
