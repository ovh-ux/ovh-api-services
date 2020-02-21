angular.module('ovh-api-services').service('OvhApiHostingWebEmailOptionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiHostingWebEmailOptionv6Cache');
  const queryCache = $cacheFactory('OvhApiHostingWebEmailOptionv6CacheQuery');

  const resource = $resource('/hosting/web/:serviceName/emailOption/:id', {
    serviceName: '@serviceName',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    get: {
      method: 'GET',
      cache,
    },
    serviceInfo: {
      method: 'GET',
      url: '/hosting/web/:serviceName/emailOption/:id/serviceInfos',
      cache,
    },
  });

  resource.resetCache = function () {
    cache.removeAll();
  };

  resource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return resource;
});
