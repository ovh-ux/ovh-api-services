angular.module('ovh-api-services').service('OvhApiXdslEmailProV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslEmailProV6');
  const queryCache = $cacheFactory('OvhApiXdslEmailProV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const emailPro = $resource('/xdsl/email/pro/:email', {
    email: '@email',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    get: {
      method: 'GET',
      interceptor,
    },
    save: {
      method: 'POST',
      interceptor,
    },
    delete: {
      method: 'DELETE',
      interceptor,
    },
    changePassword: {
      method: 'POST',
      interceptor,
      url: '/xdsl/email/pro/:email/changePassword',
    },
  });

  emailPro.resetCache = function () {
    cache.removeAll();
  };

  emailPro.resetQueryCache = function () {
    queryCache.removeAll();
  };

  emailPro.resetAllCache = function () {
    emailPro.resetCache();
    emailPro.resetQueryCache();
  };

  return emailPro;
});
