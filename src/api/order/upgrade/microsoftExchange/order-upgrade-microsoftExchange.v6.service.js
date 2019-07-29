angular
  .module('ovh-api-services')
  .service('OvhApiOrderUpgradeMicrosoftExchangeV6', ($resource, $cacheFactory) => {
    // Cache to invalidate
    const queryCache = $cacheFactory('OvhApiOrderUpgradeMicrosoftExchangeV6Query');
    const cache = $cacheFactory('OvhApiOrderUpgradeMicrosoftExchangeV6');

    const interceptor = {
      response(response) {
        resource.resetQueryCache();
        return response.data;
      },
    };

    const resource = $resource('/order/upgrade/microsoftExchange/:serviceName/:planCode', {
      serviceName: '@serviceName',
      planCode: '@planCode',
    }, {
      getAvailableServices: {
        method: 'GET', cache: queryCache, isArray: true, url: '/order/upgrade/microsoftExchange',
      },
      getAvailableOffers: {
        method: 'GET', cache: queryCache, isArray: true, url: '/order/upgrade/microsoftExchange/:serviceName',
      },
      getOrder: { method: 'GET', cache, isArray: false },
      order: {
        method: 'POST', cache, isArray: false, interceptor,
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
