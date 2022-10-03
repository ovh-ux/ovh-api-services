angular.module('ovh-api-services').service('OvhApiCloudProjectStorageAapi', ($resource) => {
  const storages = $resource('/cloud/project/:serviceName/storages', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      serviceType: 'aapi',
      archive: '@archive',
      isArray: false,
    },
  });

  return storages;
});
