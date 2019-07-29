angular.module('ovh-api-services').service('OvhApiTelephonyLineAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyLineAapi');

  const telephonyAll = $resource('/telephony/line', {}, {
    get: {
      method: 'GET',
      serviceType: 'aapi',
      isArray: true,
      cache,
    },
  });

  telephonyAll.resetCache = function () {
    cache.removeAll();
  };

  return telephonyAll;
});
