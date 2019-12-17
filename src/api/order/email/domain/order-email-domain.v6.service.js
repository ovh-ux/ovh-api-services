angular.module('ovh-api-services').service('OvhApiOrderEmailDomainV6', ($resource, $cacheFactory) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderEmailDomainV6Query');
  const cache = $cacheFactory('OvhApiOrderEmailDomainV6');

  const interceptor = {
    response(response) {
      orderEmailDomain.resetQueryCache();
      return response.data;
    },
  };

  const orderEmailDomain = $resource('/order/email/domain/:domain', {
    domain: '@domain',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    getOptions: {
      method: 'GET',
      cache,
      isArray: true,
      url: '/order/email/domain/:domain/:option',
    },
    getPricesAndContracts: {
      method: 'GET',
      cache,
      url: '/order/email/domain/:domain/:option/:duration',
    },
    orderEmail: {
      method: 'POST',
      interceptor,
      url: '/order/email/domain/:domain/:option/:duration',
    }
  });

  orderEmailDomain.resetCache = function () {
    cache.removeAll();
  };

  orderEmailDomain.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return orderEmailDomain;
});
