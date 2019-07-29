angular.module('ovh-api-services').service('OvhApiMeAvailableAutomaticPaymentMeansV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiMeAvailableAutomaticPaymentMeansV6');

  return $resource('/me/availableAutomaticPaymentMeans', { }, {
    get: { method: 'GET', cache, isArray: false },
  });
});
