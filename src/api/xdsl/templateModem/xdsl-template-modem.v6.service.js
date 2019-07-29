angular.module('ovh-api-services').service('OvhApiXdslTemplateModemV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslTemplateModemV6');
  const queryCache = $cacheFactory('OvhApiXdslTemplateModemV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const templateModemResource = $resource('/xdsl/templateModem', {
    xdslId: '@xdslId',
    name: '@name',
    serviceName: '@serviceName',
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
    getBatch: {
      method: 'GET',
      isArray: true,
      headers: {
        'X-Ovh-Batch': ',',
      },
      url: '/xdsl/templateModem/:name',
      cache,
    },
    post: {
      method: 'POST',
      interceptor,
    },
    getTemplate: {
      method: 'GET',
      url: '/xdsl/templateModem/:name',
    },
    updateTemplate: {
      method: 'PUT',
      url: '/xdsl/templateModem/:name',
      interceptor,
    },
    deleteTemplate: {
      method: 'DELETE',
      url: '/xdsl/templateModem/:name',
      interceptor,
    },
  });

  templateModemResource.resetAllCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return templateModemResource;
});
