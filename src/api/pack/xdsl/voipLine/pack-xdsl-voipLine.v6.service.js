angular.module('ovh-api-services').service('OvhApiPackXdslVoipLineV6', ($resource, OvhApiPackXdslVoipLine) => {
  const interceptor = {
    response(response) {
      OvhApiPackXdslVoipLine.resetCache();
      return response.resource;
    },
  };

  return $resource('/pack/xdsl/:packId/voipLine/services', {
    packId: '@packId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiPackXdslVoipLine.cache,
    },
    save: {
      method: 'POST',
      interceptor,
    },
    getHardwares: {
      method: 'GET',
      url: '/pack/xdsl/:packId/voipLine/options/hardwares',
      isArray: true,
      cache: OvhApiPackXdslVoipLine.cache,
    },
    getShippingAddresses: {
      method: 'GET',
      url: '/pack/xdsl/:packId/voipLine/options/shippingAddresses',
      isArray: true,
      cache: OvhApiPackXdslVoipLine.cache,
    },
  });
});
