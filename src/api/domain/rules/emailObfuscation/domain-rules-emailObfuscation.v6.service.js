angular.module('ovh-api-services').service('OvhApiDomainRulesEmailsObfuscationV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiDomainRulesEmailsObfuscationQueryV6');

  const domain = $resource('/domain/:serviceName/rules/emailsObfuscation', {
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
