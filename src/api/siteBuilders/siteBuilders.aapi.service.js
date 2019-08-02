angular.module('ovh-api-services').service('OvhApiSiteBuildersAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiSiteBuildersAapi');

  const siteBuildersResource = $resource('/sitebuilders', {
  }, {
    get: {
      method: 'GET',
      isArray: true,
      universe: '@universe',
      serviceType: 'aapi',
    },
  });

  siteBuildersResource.resetAllCache = function () {
    siteBuildersResource.resetCache();
  };

  siteBuildersResource.resetCache = function () {
    cache.removeAll();
  };

  return siteBuildersResource;
});
