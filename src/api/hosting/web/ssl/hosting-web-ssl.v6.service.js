angular.module('ovh-api-services').service('OvhApiHostingWebSslV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiHostingWebSslv6Cache');

  const interceptor = {
    response(response) {
      cache.removeAll();

      return response.data;
    },
  };

  const resource = $resource('/hosting/web/:serviceName/ssl', {
    serviceName: '@serviceName',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    post: {
      method: 'POST',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    queryDomains: {
      url: '/hosting/web/:serviceName/ssl/domains',
      method: 'GET',
      cache,
      isArray: true,
    },
    regenerate: {
      url: '/hosting/web/:serviceName/ssl/regenerate',
      method: 'POST',
      interceptor,
    },
    getReport: {
      url: '/hosting/web/:serviceName/ssl/report',
      method: 'GET',
      cache,
    },
  });

  resource.resetAllCache = function () {
    resource.resetQueryCache();
  };

  resource.resetQueryCache = function () {
    cache.removeAll();
  };

  return resource;
});
