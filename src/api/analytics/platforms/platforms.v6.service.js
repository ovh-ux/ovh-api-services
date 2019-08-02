angular.module('ovh-api-services').service('OvhApiAnalyticsPlatformsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiAnalyticsPlatformsV6');
  const queryCache = $cacheFactory('OvhApiAnalyticsPlatformsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const adpResource = $resource('/analytics/platforms/:serviceName', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: { method: 'GET', cache },
    deploy: {
      url: '/analytics/platforms/:serviceName/deploy',
      method: 'POST',
      interceptor,
    },
    getActivity: {
      url: '/analytics/platforms/:serviceName/activity',
      method: 'GET',
      isArray: true,
      cache,
    },
    getStatus: {
      url: '/analytics/platforms/:serviceName/status',
      method: 'GET',
      isArray: true,
    },
  });

  adpResource.resetCache = function () {
    cache.removeAll();
  };

  adpResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return adpResource;
});
