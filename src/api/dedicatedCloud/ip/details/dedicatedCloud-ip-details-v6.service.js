angular.module('ovh-api-services').service('OvhApiDedicatedCloudIpDetailsV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiDedicatedCloudIpDetailsV6');

  const ipDetailsResource = $resource('/dedicatedCloud/:serviceName/ip/:network/details', {
    serviceName: '@serviceName',
    network: '@network',
  }, {
    get: { method: 'GET', cache, isArray: true },
  });

  ipDetailsResource.resetCache = function () {
    cache.removeAll();
  };

  return ipDetailsResource;
});
