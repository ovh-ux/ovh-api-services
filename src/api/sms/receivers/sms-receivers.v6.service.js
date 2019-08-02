angular.module('ovh-api-services').service('OvhApiSmsReceiversV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsReceiversV6');
  const queryCache = $cacheFactory('OvhApiSmsReceiversV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const receiversResource = $resource('/sms/:serviceName/receivers/:slotId', {
    serviceName: '@serviceName',
    slotId: '@slotId',
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
    delete: {
      method: 'DELETE',
      interceptor,
    },
    create: {
      method: 'POST',
      url: '/sms/:serviceName/receivers',
      interceptor,
    },
    getCsv: {
      method: 'GET',
      url: '/sms/:serviceName/receivers/:slotId/csv',
      cache,
      transformResponse(data, headers, status) {
        if (status === 200) {
          return { data: angular.fromJson(data) };
        }
        return data;
      },
    },
    clean: {
      method: 'POST',
      url: '/sms/:serviceName/receivers/:slotId/clean',
      interceptor,
    },
    edit: {
      method: 'PUT',
      interceptor,
    },
  });

  receiversResource.resetCache = function () {
    cache.removeAll();
  };

  receiversResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  receiversResource.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return receiversResource;
});
