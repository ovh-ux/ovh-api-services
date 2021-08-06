angular.module('ovh-api-services').service('OvhApiVpsAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiVpsAapi');

  const vpsResource = $resource('/vps/:serviceName', {
    serviceName: '@serviceName',
  });

  vpsResource.resetAllCache = function () {
    vpsResource.resetCache();
  };

  vpsResource.resetCache = function () {
    cache.removeAll();
  };

  return vpsResource;
});
