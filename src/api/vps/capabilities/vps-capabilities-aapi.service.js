angular.module('ovh-api-services').service('OvhApiVpsCapabilitiesAapi', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiCapabilitiesAapi');

  const capabilitiesAapi = $resource('/vps/capabilities/:serviceName', {
    serviceName: '@serviceName',
  }, {
    query: {
      method: 'GET',
      serviceType: 'aapi',
      isArray: true,
      cache,
    },
  });

  capabilitiesAapi.resetCache = function () {
    cache.removeAll();
  };

  return capabilitiesAapi;
});
