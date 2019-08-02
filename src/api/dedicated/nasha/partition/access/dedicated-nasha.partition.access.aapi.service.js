angular.module('ovh-api-services').service('OvhApiDedicatedNashaPartitionAccessAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDedicatedNashaPartitionAccessAapi');

  const instancesResource = $resource('/dedicated/nasha/:serviceName/partition/:partitionName', {
    serviceName: '@serviceName',
    partitionName: '@partitionName',
  }, {
    authorizableIps: {
      url: '/dedicated/nasha/:serviceName/partition/:partitionName/authorizableIps',
      isArray: true,
      cache,
      method: 'GET',
      serviceType: 'aapi',
    },
  });

  return instancesResource;
});
