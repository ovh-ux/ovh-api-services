angular.module('ovh-api-services').service('OvhApiXdslRMAV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslRMAV6');
  const queryCache = $cacheFactory('OvhApiXdslRMAV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const resource = $resource('/xdsl/:xdslId/rma/:id', {
    xdslId: '@xdslId',
    id: '@id',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: {
      method: 'GET',
    },
    update: {
      method: 'PUT',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
  });

  resource.resetAllCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return resource;
});
