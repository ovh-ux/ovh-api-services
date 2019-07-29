angular.module('ovh-api-services').service('OvhApiDomainOptionsV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDomainOptionsV6Query');
  const cache = $cacheFactory('OvhApiDomainOptionsV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.data;
    },
  };

  const domainOptions = $resource('/domain/:serviceName/option/:option', {
    serviceName: '@serviceName',
    option: '@option',
  }, {
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    get: { method: 'GET', cache },
    delete: { method: 'DELETE', interceptor },
  });

  domainOptions.resetQueryCache = function () {
    queryCache.removeAll();
  };

  domainOptions.resetCache = function () {
    cache.removeAll();
  };

  return domainOptions;
});
