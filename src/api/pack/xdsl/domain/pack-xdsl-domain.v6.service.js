angular.module('ovh-api-services').service('OvhApiPackXdslDomainActivationV6', ($resource, OvhApiPackXdslDomainActivation) => {
  const interceptor = {
    response(response) {
      OvhApiPackXdslDomainActivation.resetCache();
      return response.resource;
    },
  };

  return $resource(
    '/pack/xdsl/:packId/domain/services', {
      packId: '@id',
    }, {
      postServices: {
        method: 'POST',
        isArray: false,
        interceptor,
      },
      getServices: {
        method: 'GET',
        isArray: true,
        cache: OvhApiPackXdslDomainActivation.cache,
      },
      getTlds: {
        method: 'GET',
        url: '/pack/xdsl/:packId/domain/options/tlds',
        isArray: true,
        cache: OvhApiPackXdslDomainActivation.cache,
      },
    },
  );
});
