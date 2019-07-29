angular
  .module('ovh-api-services')
  .service('OvhApiOrderUpgradeBaremetalPublicBandwidthV6', ($resource, $cacheFactory) => {
    // Cache to invalidate
    const queryCache = $cacheFactory('OvhApiOrderUpgradeBaremetalPublicBandwidthV6Query');
    const cache = $cacheFactory('OvhApiOrderUpgradeBaremetalPublicBandwidthV6');

    const interceptor = {
      response(response) {
        resource.resetCache();
        resource.resetQueryCache();
        return response.data;
      },
    };

    const resource = $resource('/order/upgrade/baremetalPublicBandwidth/:serviceName/:planCode', {
      serviceName: '@serviceName',
      planCode: '@planCode',
    }, {
      getPublicBandwidthOptions: {
        method: 'GET',
        cache: queryCache,
        isArray: true,
        url: '/order/upgrade/baremetalPublicBandwidth/:serviceName',
      },
      getPublicBandwidthOrder: {
        method: 'GET',
        cache,
        url: '/order/upgrade/baremetalPublicBandwidth/:serviceName/:planCode',
        params: {
          quantity: '@quantity',
        },
      },
      postPublicBandwidthPlaceOrder: {
        method: 'POST',
        interceptor,
        url: '/order/upgrade/baremetalPublicBandwidth/:serviceName/:planCode',
        params: {
          quantity: '@quantity',
          autoPayWithPreferredPaymentMethod: '@autoPayWithPreferredPaymentMethod',
        },
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
