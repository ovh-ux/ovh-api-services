angular.module('ovh-api-services').service('OvhApiLicenseOfficeDomainV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiLicenseOfficeDomainV6');
  const queryCache = $cacheFactory('OvhApiLicenseOfficeDomainV6Query');

  const domains = $resource('/license/office/:serviceName/domain/:domainName', {
    serviceName: '@serviceName',
    domainName: '@domainName',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
  });

  domains.resetCache = function () {
    cache.removeAll();
  };

  domains.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return domains;
});
