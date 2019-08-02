import trim from 'lodash/trim';

angular.module('ovh-api-services').service('OvhApiPackXdslEmailProV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiPackXdslEmailProV6');
  const queryCache = $cacheFactory('OvhApiPackXdslEmailProV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const emailPro = $resource('/pack/xdsl/:packName/emailPro/services', {
    packName: '@packName',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
    },
    save: {
      method: 'POST',
      interceptor,
    },
    getDomains: {
      method: 'GET',
      url: '/pack/xdsl/:packName/emailPro/options/domains',
      isArray: true,
      cache,
    },
    isEmailAvailable: {
      method: 'GET',
      url: '/pack/xdsl/:packName/emailPro/options/isEmailAvailable',
      transformResponse(data, headersGetter, status) {
        if (status !== 200) {
          return data;
        }
        return { available: trim(data).toUpperCase() === 'TRUE' };
      },
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
