angular.module('ovh-api-services').service('OvhApiMeBillingCapacitiesV6', ($cacheFactory, $resource) => {
  const queryCache = $cacheFactory('OvhApiMeBillingCapacitiesQueryV6');

  const billingCapacitiesResource = $resource('/me/billing/capacities', {}, {
    query: {
      method: 'GET',
      isArray: false,
      cache: queryCache,
    },
  });

  billingCapacitiesResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return billingCapacitiesResource;
});
