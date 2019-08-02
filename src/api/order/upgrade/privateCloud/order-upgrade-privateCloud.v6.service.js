angular
  .module('ovh-api-services')
  .service('OvhApiOrderUpgradePrivateCloudV6', ($resource, $cacheFactory) => {
    // Cache to invalidate
    const queryCache = $cacheFactory('OvhApiOrderUpgradePrivateCloudV6Query');
    const cache = $cacheFactory('OvhApiOrderUpgradePrivateCloudV6');

    const interceptor = {
      response(response) {
        resource.resetCache();
        resource.resetQueryCache();
        return response.data;
      },
    };

    const resource = $resource('/order/upgrade/privateCloud/:serviceName/:planCode', {
      serviceName: '@serviceName',
      planCode: '@planCode',
    }, {
      get: {
        method: 'GET', cache: queryCache, isArray: true, url: '/order/upgrade/privateCloud/:serviceName',
      },
      getPlan: { method: 'GET', cache, isArray: false },
      post: { method: 'POST', interceptor },
      query: {
        method: 'GET', cache: queryCache, isArray: true, url: '/order/upgrade/privateCloud',
      },
    });

    resource.resetCache = function () {
      cache.removeAll();
    };

    resource.resetQueryCache = function () {
      queryCache.removeAll();
    };

    return resource;
  });
