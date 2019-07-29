angular
  .module('ovh-api-services')
  .service('OvhApiMsServicesSharepointV6', ($resource, $cacheFactory) => {
    const cache = $cacheFactory('OvhApiMsServicesSharepointV6');

    const interceptor = {
      response(response) {
        cache.removeAll();
        return response.data;
      },
    };

    const resource = $resource('/msServices/:serviceName/sharepoint', {
      serviceName: '@serviceName',
    }, {
      get: { method: 'GET', cache, isArray: false },
      edit: {
        method: 'PUT', cache, isArray: false, interceptor,
      },
      doesServiceUseAgora: {
        url: '/msServices/:serviceName/sharepoint/billingMigrated ',
        method: 'GET',
        cache,
        isArray: false,
        transformResponse(response, headers, status) {
          if (status === 200) {
            return { billingMigrated: angular.fromJson(response) };
          }
          return response;
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
