angular.module('ovh-api-services').service('OvhApiCloudProjectUsageCurrentV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiCloudProjectUsageCurrentV6');

  const usages = $resource('/cloud/project/:serviceName/usage/current', {
    serviceName: '@serviceName',
  }, {
    get: { method: 'GET', cache },
  });

  usages.resetCache = function () {
    cache.removeAll();
  };

  return usages;
});
