angular.module('ovh-api-services').service('OvhApiPackXdslHubicV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiPackXdslHubicV6');

  return $resource('/pack/xdsl/:packName/hubic/services', {
    packName: '@packName',
  }, {
    getDomainDetails: {
      method: 'GET',
      url: '/pack/xdsl/:packName/hubic/services/:domain/details',
      cache,
      params: {
        domain: '@domain',
      },
    },
  });
});
