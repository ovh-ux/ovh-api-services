angular
  .module('ovh-api-services')
  .service('OvhApiOrderUpgradeBaremetalPrivateBandwidthV6', ($resource, $cacheFactory) => {
    // Cache to invalidate
    const queryCache = $cacheFactory('OvhApiOrderUpgradeBaremetalPrivateBandwidthV6Query');
    const cache = $cacheFactory('OvhApiOrderUpgradeBaremetalPrivateBandwidthV6');

    const interceptor = {
      response(response) {
        resource.resetCache();
        resource.resetQueryCache();
        return response.data;
      },
    };

    const resource = $resource('/order/upgrade/baremetalPrivateBandwidth/:serviceName/:planCode', {
      serviceName: '@serviceName',
      planCode: '@planCode',
    }, {
      getPrivateBandwidthOptions: {
        method: 'GET',
        cache: queryCache,
        isArray: true,
        url: '/order/upgrade/baremetalPrivateBandwidth/:serviceName',
      },
      getPrivateBandwidthOrder: {
        method: 'GET',
        cache,
        url: '/order/upgrade/baremetalPrivateBandwidth/:serviceName/:planCode',
        params: {
          quantity: '@quantity',
        },
      },
      postPrivateBandwidthPlaceOrder: {
        method: 'POST',
        interceptor,
        url: '/order/upgrade/baremetalPrivateBandwidth/:serviceName/:planCode',
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
