

angular.module('ovh-api-services').service('OvhApiVrackDedicatedCloudV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiVrackDedicatedCloudV6');
  const queryCache = $cacheFactory('OvhApiVrackDedicatedCloudV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const vrackDedicatedCloud = $resource('/vrack/:serviceName/dedicatedCloud/:dedicatedCloud', {
    serviceName: '@serviceName',
    dedicatedCloud: '@dedicatedCloud',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
    create: {
      method: 'POST',
      url: '/vrack/:serviceName/dedicatedCloud',
      interceptor,
    },
  });

  vrackDedicatedCloud.resetCache = function () {
    cache.removeAll();
  };

  vrackDedicatedCloud.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return vrackDedicatedCloud;
});
