angular.module('ovh-api-services').service('OvhApiVpsImagesAvailableV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiVpsImagesAvailableV6');
  const queryCache = $cacheFactory('OvhApiVpsImagesAvailableV6Cache');

  const resource = $resource('/vps/:serviceName/images/available', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', url: '/vps/:serviceName/images/available/:id', cache },
  });

  resource.resetCache = () => {
    cache.removeAll();
  };

  resource.resetQueryCache = () => {
    queryCache.removeAll();
  };

  resource.resetAllCache = () => {
    resource.resetCache();
    resource.resetQueryCache();
  };

  return resource;
});
