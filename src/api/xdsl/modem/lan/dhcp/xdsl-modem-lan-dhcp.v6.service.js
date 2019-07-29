angular.module('ovh-api-services').service('OvhApiXdslModemLanDhcpV6', ($resource, $cacheFactory, OvhApiXdslModemLanDhcpAapi) => {
  const cache = $cacheFactory('OvhApiXdslModemLanDhcpV6');
  const interceptor = {
    response(response) {
      OvhApiXdslModemLanDhcpAapi.resetCache();
      cache.removeAll();
      return response.resource;
    },
  };

  return $resource('/xdsl/:xdslId/modem/lan/:lanName/dhcp/:dhcpName', {
    xdslId: '@xdslId',
    lanName: '@lanName',
    dhcpName: '@dhcpName',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    query: {
      method: 'GET',
      cache,
      isArray: true,
    },
    update: {
      method: 'PUT',
      interceptor,
    },
  });
});
