angular.module('ovh-api-services').service('OvhApiMeAutorenewV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiMeAutorenewV6');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      return response;
    },
  };

  const autorenew = $resource('/me/autorenew', {}, {
    query: { method: 'GET', cache },
    update: { method: 'PUT', interceptor },
    create: { method: 'POST', interceptor },
  });

  autorenew.resetCache = function () {
    cache.removeAll();
  };

  return autorenew;
});
