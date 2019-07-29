angular.module('ovh-api-services').service('OvhApiDomainConfigurationsObfuscatedEmailsV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDomainConfigurationsObfuscatedEmailsQueryV6');

  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response.data;
    },
  };

  const domain = $resource('/domain/:serviceName/configurations/obfuscatedEmails', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    put: {
      method: 'PUT',
      interceptor,
      isArray: true,
    },
    refresh: {
      method: 'POST',
      url: '/domain/:serviceName/configurations/obfuscatedEmails/refresh',
      interceptor,
    },
  });

  domain.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return domain;
});
