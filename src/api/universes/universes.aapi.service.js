angular.module('ovh-api-services').service('OvhApiUniversesAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiUniversesAapi');

  const universesResource = $resource('/universes', {
  }, {
    query: {
      method: 'GET',
      isArray: true,
      serviceType: 'aapi',
      cache,
    },
  });

  universesResource.resetCache = function () {
    cache.removeAll();
  };

  return universesResource;
});
