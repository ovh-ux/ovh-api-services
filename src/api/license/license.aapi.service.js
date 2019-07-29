angular.module('ovh-api-services').service('OvhApiLicenseAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiLicenseAapi');

  const licenses = $resource('/sws/license', {}, {
    get: {
      method: 'GET',
      url: '/sws/license?filterType',
      serviceType: 'aapi',
      cache,
      isArray: false,
      params: {
        count: '@count',
        offset: '@offset',
      },
    },
  });

  licenses.resetCache = function () {
    cache.removeAll();
  };

  return licenses;
});
