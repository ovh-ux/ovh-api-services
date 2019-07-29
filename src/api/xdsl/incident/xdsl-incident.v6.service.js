angular.module('ovh-api-services').service('OvhApiXdslIncidentV6', ($cacheFactory, $resource) => {
  const cache = $cacheFactory('OvhApiXdslIncidentV6');

  return $resource('/xdsl/:serviceName/incident', {
    serviceName: '@serviceName',
  }, {
    get: {
      method: 'GET',
      cache,
      isArray: false,
    },
  });
});
