angular
  .module('ovh-api-services')
  .service('OvhApiMsServicesExchangeV6', ($resource, $cacheFactory) => {
    const cache = $cacheFactory('OvhApiMsServicesExchangeV6');

    const interceptor = {
      response(response) {
        cache.removeAll();

        return response.data;
      },
    };

    const resource = $resource('/msServices/:serviceName/exchange', {
      serviceName: '@serviceName',
    }, {
      get: { method: 'GET', cache, isArray: false },
      edit: {
        method: 'PUT', cache, isArray: false, interceptor,
      },
      doesServiceUseAgora: {
        url: '/msServices/:serviceName/exchange/billingMigrated ',
        method: 'GET',
        cache,
        isArray: false,
        transformResponse(response, headers, status) {
          return status === 200 ? { serviceUsesAgora: (`${response}`).toUpperCase() === 'TRUE' } : response;
        },
      },
    });

    resource.resetAllCache = function () {
      resource.resetCache();
    };

    resource.resetCache = function () {
      cache.removeAll();
    };

    return resource;
  });
