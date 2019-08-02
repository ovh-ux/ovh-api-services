angular.module('ovh-api-services').service('OvhApiMeTelephonyDefaultIpRestrictionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiMeTelephonyDefaultIpRestrictionV6');
  const queryCache = $cacheFactory('OvhApiMeTelephonyDefaultIpRestrictionV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const res = $resource('/me/telephony/defaultIpRestriction/:id', {
    id: '@id',
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
      cache: queryCache,
      headers: {
        'X-Ovh-Batch': ',',
      },
    },
    create: {
      method: 'POST',
      interceptor,
    },
    remove: {
      method: 'DELETE',
      interceptor,
    },
  });

  res.resetCache = function () {
    cache.removeAll();
  };

  res.resetQueryCache = function () {
    queryCache.removeAll();
  };

  res.resetAllCache = function () {
    this.resetCache();
    this.resetQueryCache();
  };

  return res;
});
