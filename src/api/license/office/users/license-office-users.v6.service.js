angular.module('ovh-api-services').service('OvhApiLicenseOfficeUsersV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiLicenseOfficeUsersV6');
  const queryCache = $cacheFactory('OvhApiLicenseOfficeUsersV6Query');
  const interceptor = {
    response(response) {
      cache.remove(response.config.url);
      queryCache.removeAll();
      return response;
    },
  };

  const licenseOfficeUsers = $resource('/license/office/:serviceName/user/:user', {
    serviceName: '@serviceName',
    user: '@user',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    save: { method: 'POST', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  licenseOfficeUsers.resetCache = function () {
    cache.removeAll();
  };

  licenseOfficeUsers.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return licenseOfficeUsers;
});
