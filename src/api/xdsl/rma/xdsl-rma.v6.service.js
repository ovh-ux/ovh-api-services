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

  const resource = $resource('/xdsl/:xdslId/rma', {
    xdslId: '@xdslId',
    id: '@id'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: {
      method: 'GET',
      cache,
    },
    getRMA: {
      method: 'GET',
      url: '/xdsl/:xdslId/rma/:id',
    },
    updateRMA: {
      method: 'PUT',
      url: '/xdsl/:xdslId/rma/:id',
      interceptor,
    },
    deleteRMA: {
      method: 'DELETE',
      url: '/xdsl/:xdslId/rma/:id',
      interceptor;
    },
  });

  resource.resetAllCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return resource;
});
