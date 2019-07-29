angular.module('ovh-api-services').service('OvhApiSmsV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiSmsV6');
  const queryCache = $cacheFactory('OvhApiSmsV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const sms = $resource('/sms/:serviceName', {
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
    put: {
      method: 'PUT',
      url: '/sms/:serviceName',
      isArray: false,
      interceptor,
    },
    edit: {
      method: 'PUT',
      interceptor,
    },
    schema: {
      method: 'GET',
      url: '/sms.json',
    },
    seeOffers: {
      method: 'GET',
      url: '/sms/:serviceName/seeOffers',
      isArray: true,
      cache,
    },
    getDocument: {
      method: 'GET',
      url: '/sms/:serviceName/document',
      params: {
        wayType: '@wayType',
      },
      transformResponse(data, headers, status) {
        if (status === 200) {
          return { docId: angular.fromJson(data) };
        }
        return data;
      },
    },
    getServiceInfos: {
      method: 'GET',
      url: '/sms/:serviceName/serviceInfos',
      cache,
    },
    getSendersAvailableForValidation: {
      method: 'GET',
      url: '/sms/:serviceName/sendersAvailableForValidation',
      isArray: true,
      cache,
    },
  });

  sms.resetCache = function () {
    cache.removeAll();
  };

  sms.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return sms;
});
