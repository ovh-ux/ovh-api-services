angular.module('ovh-api-services').service('OvhApiOrderLicenseOfficeNewV6', ($resource, $cacheFactory, OvhApiLicense) => {
  // Cache to invalidate
  const queryCache = $cacheFactory('OvhApiOrderLicenseOfficeNewV6Query');
  const cache = $cacheFactory('OvhApiOrderLicenseOfficeNewV6');

  const interceptor = {
    response(response) {
      OvhApiLicense.Office().v6().resetQueryCache();
      return response;
    },
  };

  return $resource('/order/license/office/new/:duration', {
    duration: '@duration',
  }, {
    query: { method: 'GET', isArray: true, cache: queryCache },
    get: { method: 'GET', cache },
    save: { method: 'POST', interceptor },
  });
});
