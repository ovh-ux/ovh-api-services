angular.module('ovh-api-services').service('OvhApiDedicatedCloudDatacenterV6', ($resource, $cacheFactory) => {
  const otherCache = $cacheFactory('OvhApiDedicatedCloudDatacenterV6');
  const queryCache = $cacheFactory('OvhApiDedicatedCloudDatacenterV6Query');

  const interceptor = {
    response(response) {
      otherCache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const datacenterResource = $resource('/dedicatedCloud/:serviceName/datacenter/:datacenterId', {
    serviceName: '@serviceName',
    datacenterId: '@datacenterId',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache: otherCache },
    put: { method: 'PUT', interceptor },
    save: { method: 'POST', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  datacenterResource.resetAllCache = function () {
    datacenterResource.resetOtherCache();
    datacenterResource.resetQueryCache();
  };

  datacenterResource.resetOtherCache = function () {
    otherCache.removeAll();
  };

  datacenterResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return datacenterResource;
});
