angular
  .module('ovh-api-services')
  .service('OvhApiOrderCartServiceOptionMicrosoftV6', ($resource, $cacheFactory) => {
    const queryCache = $cacheFactory('OvhApiOrderCartServiceOptionMicrosoftV6Query');
    const cache = $cacheFactory('OvhApiOrderCartServiceOptionMicrosoftV6');

    const interceptor = {
      response(response) {
        cache.remove(response.config.url);
        queryCache.removeAll();
        return response.data;
      },
    };

    const resource = $resource('/order/cartServiceOption/microsoft/:serviceName', {
      serviceName: '@serviceName',
    }, {
      get: { method: 'GET', isArray: true, cache },
      getAvailableServices: {
        method: 'GET', isArray: true, cache, url: '/order/cartServiceOption/microsoft',
      },
      post: {
        method: 'POST',
        cache: queryCache,
        interceptor,
        params: {
          cartId: '@cartId',
          duration: '@duration',
          planCode: '@planCode',
          pricingMode: '@pricingMode',
          quantity: '@quantity',
        },
      },
    });

    resource.resetAllCache = function () {
      resource.resetCache();
      resource.resetQueryCache();
    };

    resource.resetCache = function () {
      cache.removeAll();
    };

    resource.resetQueryCache = function () {
      queryCache.removeAll();
    };

    return resource;
  });
