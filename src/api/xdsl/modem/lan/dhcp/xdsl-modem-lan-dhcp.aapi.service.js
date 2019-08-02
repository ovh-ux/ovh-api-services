angular.module('ovh-api-services').service('OvhApiXdslModemLanDhcpAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiXdslModemLanDhcpAapi');

  const xdslModemLanDhcpAapi = $resource('/xdsl/:xdslId/modem/lan/dhcp', {
    xdslId: '@xdslId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      serviceType: 'aapi',
      cache,
    },
  });

  xdslModemLanDhcpAapi.resetCache = function () {
    cache.removeAll();
  };

  return xdslModemLanDhcpAapi;
});
