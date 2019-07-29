angular.module('ovh-api-services').service('OvhApiXdslDeconsolidationV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApixdslDeconsolidationV6');

  return $resource(
    '/xdsl/:xdslId', {
      serviceName: '@serviceName',
    }, {
      terms: {
        method: 'GET',
        cache,
        url: '/xdsl/:serviceName/totalDeconsolidationTerms',
      },
      requestTotalDeconsolidation: {
        method: 'POST',
        url: '/xdsl/:serviceName/requestTotalDeconsolidation',
      },
    },
  );
});
