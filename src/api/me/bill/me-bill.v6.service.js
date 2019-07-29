angular.module('ovh-api-services').service('OvhApiMeBillV6', ($resource, $cacheFactory) => {
  // we don't need cache for query : it's just list of IDs and we don't know if a new bill is emited
  const cache = $cacheFactory('OvhApiMeBillV6');

  const userBillResource = $resource('/me/bill/:billId', {
    billId: '@billId',
  }, {
    get: { method: 'GET', cache },
    query: { method: 'GET', isArray: true },
  });

  userBillResource.resetCache = function () {
    cache.removeAll();
  };

  return userBillResource;
});
