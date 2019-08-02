angular.module('ovh-api-services').service('OvhApiXdslModemLanAapi', ($resource, OvhApiXdslModemLan) => {
  const xdslModemLanAapi = $resource('/xdsl/:xdslId/modem/lan/details', {
    xdslId: '@xdslId',
  }, {
    getLanDetails: {
      method: 'GET',
      isArray: true,
      serviceType: 'aapi',
      cache: OvhApiXdslModemLan.cache,
    },
  });

  return xdslModemLanAapi;
});
