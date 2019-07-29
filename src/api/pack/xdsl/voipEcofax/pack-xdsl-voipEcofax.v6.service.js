angular.module('ovh-api-services').service('OvhApiPackXdslVoipEcofaxV6', ($resource, OvhApiPackXdslVoipEcofax) => {
  const interceptor = {
    response(response) {
      OvhApiPackXdslVoipEcofax.resetCache();
      return response.resource;
    },
  };

  return $resource('/pack/xdsl/:packId/voipEcofax/services', {
    packId: '@packId',
  }, {
    query: {
      method: 'GET',
      isArray: true,
      cache: OvhApiPackXdslVoipEcofax.cache,
    },
    save: {
      method: 'POST',
      interceptor,
    },
  });
});
