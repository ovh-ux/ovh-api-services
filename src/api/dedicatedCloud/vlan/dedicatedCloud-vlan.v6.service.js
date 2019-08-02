angular.module('ovh-api-services').service('OvhApiDedicatedCloudVlanV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDedicatedCloudVlanV6Query');
  const cache = $cacheFactory('OvhApiDedicatedCloudVlanV6');

  const vlanResource = $resource('/dedicatedCloud/:serviceName/vlan/:vlanId', {
    serviceName: '@serviceName',
    vlandId: '@vlanId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', cache: queryCache, isArray: true },
  });

  vlanResource.resetCache = function () {
    cache.removeAll();
  };

  vlanResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return vlanResource;
});
