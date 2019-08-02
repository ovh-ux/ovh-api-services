angular.module('ovh-api-services').service('OvhApiDomainRulesOptinV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDomainRulesOptinQueryV6');

  const domain = $resource('/domain/:serviceName/rules/optin', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
  });

  domain.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return domain;
});
