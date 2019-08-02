angular.module('ovh-api-services').service('OvhApiLicenseOfficeUsageStatisticsV6', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiLicenseOfficeUsageStatisticsV6Query');

  return $resource('/license/office/:serviceName/usageStatistics', {
    serviceName: '@serviceName',
    from: '@from',
    to: '@to',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
  });
});
