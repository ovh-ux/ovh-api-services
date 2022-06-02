angular.module('ovh-api-services').service('OvhApiMeContactV7', ($resource, $cacheFactory) => {
  const queryCache = $cacheFactory('OvhApiMeContactv7Query');
  const otherCache = $cacheFactory('OvhApiMeContactV7');

  const userContactResource = $resource('/me/contact/:contactId', {
    contactId: '@contactId',
  }, {
    query: {
      url: '/me/contact',
      method: 'GET',
      cache: queryCache,
      isArray: true,
      serviceType: 'apiv6',
      headers: {
        'X-Pagination-Mode': 'CachedObjectList-Pages',
        'X-Pagination-Size': '5000',
      },
      transformResponse(response, headers, httpCode) {
        if (httpCode === 200) {
          return angular.fromJson(response).map((value) => ({
            value,
          }));
        }
        return response;
      },
    },
  });

  userContactResource.resetAllCache = function () {
    userContactResource.resetOtherCache();
    userContactResource.resetQueryCache();
  };

  userContactResource.resetOtherCache = function () {
    otherCache.removeAll();
  };

  userContactResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return userContactResource;
});
