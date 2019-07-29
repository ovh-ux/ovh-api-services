angular.module('ovh-api-services').service('OvhApiDBaasTsProjectBillingV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDBaasTsProjectBillingV6');

  const billingResource = $resource('/dbaas/timeseries/:serviceName/consumption', {
    serviceName: '@serviceName',
  }, {
    get: { method: 'GET', cache },
  });

  billingResource.resetCache = function () {
    cache.removeAll();
  };

  return billingResource;
});
