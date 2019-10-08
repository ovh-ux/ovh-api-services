angular.module('ovh-api-services').service('OvhApiMeOrderV6', ($resource, $cacheFactory) => {
  const otherCache = $cacheFactory('OvhApiMeOrderV6');
  const queryCache = $cacheFactory('OvhApiMeOrderV6Query');

  const interceptor = {
    response(response) {
      otherCache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const userOrderResource = $resource('/me/order/:orderId', { orderId: '@orderId' }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache: otherCache },
    getStatus: {
      url: '/me/order/:orderId/status',
      method: 'GET',

      /**
             * This endpoint returns a bared, quoted string like "unPaid".
             * $resource does not handle that gracefully.
             * So lets make a clean object out of that response
             */
      transformResponse(response, headers, httpCode) {
        if (httpCode === 200) {
          return { status: angular.fromJson(response) };
        }
        return response;
      },
    },
    getDetails: {
      method: 'GET', url: '/me/order/:orderId/details', cache: queryCache, isArray: true,
    },
    getDetail: {
      method: 'GET', url: '/me/order/:orderId/details/:detailId', params: { orderId: '@orderId', detailId: '@detailId' }, cache: queryCache,
    },
    pay: { method: 'POST', url: '/me/order/:orderId/pay', interceptor },
    payRegisteredPaymentMean: { method: 'POST', url: '/me/order/:orderId/payWithRegisteredPaymentMean', interceptor },
    associatedObject: { method: 'GET', url: '/me/order/:orderId/associatedObject' },
    bill: { method: 'GET', url: '/me/order/:orderId/bill' },
    followUp: { method: 'GET', url: '/me/order/:orderId/followUp', isArray: true, },
  });

  userOrderResource.resetAllCache = function () {
    userOrderResource.resetOtherCache();
    userOrderResource.resetQueryCache();
  };

  userOrderResource.resetOtherCache = function () {
    otherCache.removeAll();
  };

  userOrderResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return userOrderResource;
});
