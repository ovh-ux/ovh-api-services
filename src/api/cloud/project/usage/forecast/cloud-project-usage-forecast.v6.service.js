angular.module('ovh-api-services').service('OvhApiCloudProjectUsageForecastV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudProjectUsageForecastV6');

  const usages = $resource('/cloud/project/:serviceName/usage/forecast', {
    serviceName: '@serviceName',
  }, {
    get: { method: 'GET', cache },
  });

  usages.resetCache = function () {
    cache.removeAll();
  };

  return usages;
});
