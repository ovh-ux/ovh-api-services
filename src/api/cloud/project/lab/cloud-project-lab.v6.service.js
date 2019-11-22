angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectLabV6', ($cacheFactory, $resource) => {
    const cache = $cacheFactory('OvhApiCloudProjectLabV6');
    const queryCache = $cacheFactory('OvhApiCloudProjectLabV66Query');

    const interceptor = {
      response(response) {
        cache.removeAll();
        queryCache.removeAll();
        return response.resource;
      },
    };

    return $resource('/cloud/project/:serviceName/lab/:labId', {
      serviceName: '@serviceName',
      labId: '@labId',
    }, {
      query: {
        method: 'GET',
        isArray: true,
        cache: queryCache,
      },
      get: {
        method: 'GET',
        cache,
      },
      activate: {
        method: 'POST',
        hasBody: false,
        interceptor,
      },
      getAgreements: {
        url: '/cloud/project/:serviceName/lab/:labId/agreement',
        method: 'GET',
        cache,
      },
    });
  });
