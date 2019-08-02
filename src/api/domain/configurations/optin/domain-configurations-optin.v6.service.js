angular.module('ovh-api-services').service('OvhApiDomainConfigurationsOptinV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDomainConfigurationsOptinQueryV6');

  const interceptor = {
    response(response) {
      queryCache.removeAll();
      return response.data;
    },
  };

  const domain = $resource('/domain/:serviceName/configurations/optin', {
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
  });

  domain.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return domain;
});
