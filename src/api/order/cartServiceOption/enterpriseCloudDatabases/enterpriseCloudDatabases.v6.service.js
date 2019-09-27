angular
  .module('ovh-api-services')
  .service('OvhApiOrderCartServiceOptionEnterpriseCloudDatabasesV6', ($resource, $cacheFactory) => {
    const queryCache = $cacheFactory('OvhApiOrderCartServiceOptionEnterpriseCloudDatabasesV6Query');
    const cache = $cacheFactory('OvhApiOrderCartServiceOptionEnterpriseCloudDatabasesV6');

    const interceptor = {
      response(response) {
        cache.remove(response.config.url);
        queryCache.removeAll();
        return response.data;
      },
    };

    const resource = $resource('/order/cartServiceOption/enterpriseCloudDatabases/:serviceName', {
      serviceName: '@serviceName',
    }, {
      getAvailableDatabases: { method: 'GET', isArray: true, cache },
      getAdditionalOffers: { method: 'GET', isArray: true, cache },
      orderOptions: {
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
