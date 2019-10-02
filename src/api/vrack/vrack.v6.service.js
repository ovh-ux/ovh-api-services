
angular.module('ovh-api-services').service('OvhApiVrackV6', ($resource, $cacheFactory, OvhApiVrackAapi) => {
  const cache = $cacheFactory('OvhApiVrackV6');
  const queryCache = $cacheFactory('OvhApiVrackV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      OvhApiVrackAapi.resetCache();
      return response;
    },
  };

  const vracks = $resource('/vrack/:serviceName', {
    serviceName: '@serviceName',
  }, {
    schema: { method: 'GET', url: '/vrack.json' },
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
    allowedServices: {
      method: 'GET',
      url: '/vrack/:serviceName/allowedServices',
      cache,
    },
    tasks: {
      method: 'GET',
      isArray: true,
      url: '/vrack/:serviceName/task',
    },
    task: {
      method: 'GET',
      url: '/vrack/:serviceName/task/:taskId',
    },
  });

  vracks.resetCache = function () {
    cache.removeAll();
  };

  vracks.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return vracks;
});
