
angular.module('ovh-api-services').service('OvhApiLicenseOfficeV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiLicenseOfficeV6');
  const queryCache = $cacheFactory('OvhApiLicenseOfficeV6Query');

  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const licensesOffice = $resource('/license/office/:serviceName', {
    serviceName: '@serviceName',
  }, {
    schema: { method: 'GET', url: '/license/office.json' },
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    edit: { method: 'PUT', interceptor },
  });

  licensesOffice.resetCache = function () {
    cache.removeAll();
  };

  licensesOffice.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return licensesOffice;
});
