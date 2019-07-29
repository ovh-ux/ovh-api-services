angular.module('ovh-api-services').service('OvhApiPackXdslVoipLineAapi', ($resource, OvhApiPackXdslVoipLine) => {
  const interceptor = {
    response(response) {
      OvhApiPackXdslVoipLine.resetCache();
      return response.resource;
    },
  };

  const packXdslVoipLineAapi = $resource('/pack/xdsl/:packId/voipLines', {
    packId: '@packId',
  }, {
    query: {
      url: '/pack/xdsl/:packId/voipLine/services',
      serviceType: 'aapi',
      isArray: true,
      cache: OvhApiPackXdslVoipLine.cache,
    },
    activate: {
      url: '/pack/xdsl/:packId/voipLines/activate',
      serviceType: 'aapi',
      isArray: false,
      method: 'POST',
      interceptor,
    },
  });

  return packXdslVoipLineAapi;
});
