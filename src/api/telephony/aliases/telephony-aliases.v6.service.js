angular.module('ovh-api-services').service('OvhApiTelephonyAliasesV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyAliasesV6');
  const queryCache = $cacheFactory('OvhApiTelephonyAliasesV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response.resource;
    },
  };

  const aliases = $resource('/telephony/aliases/:serviceName', {
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
    changeContact: {
      method: 'POST',
      url: '/telephony/aliases/:serviceName/changeContact',
      interceptor,
      isArray: true,
    },
    getServiceInfos: {
      method: 'GET',
      url: '/telephony/aliases/:serviceName/serviceInfos',
      cache,
    },
    setServiceInfos: {
      method: 'PUT',
      url: '/telephony/aliases/:serviceName/serviceInfos',
      interceptor,
    },
  });

  aliases.resetCache = function () {
    cache.removeAll();
  };

  aliases.resetQueryCache = function () {
    queryCache.removeAll();
  };

  aliases.resetAllCache = function () {
    aliases.resetCache();
    aliases.resetQueryCache();
  };

  return aliases;
});
