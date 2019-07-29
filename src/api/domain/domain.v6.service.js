angular.module('ovh-api-services').service('OvhApiDomainV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDomainV6');
  const queryCache = $cacheFactory('OvhApiDomainV6Query');

  const domain = $resource('/domain/:serviceName', {
    serviceName: '@serviceName',
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
  });

  domain.resetCache = function () {
    cache.removeAll();
  };

  domain.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return domain;
});
