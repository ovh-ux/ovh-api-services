angular.module('ovh-api-services').service('OvhApiXdslModemPortAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemPortAapi');

  const xdslModemPortAapi = $resource('/xdsl/:xdslId/modem/portMappings', {
    xdslId: '@xdslId',
  }, {
    query: {
      serviceType: 'aapi',
      isArray: true,
      cache,
    },
  });

  xdslModemPortAapi.resetCache = function () {
    cache.removeAll();
  };

  return xdslModemPortAapi;
});
