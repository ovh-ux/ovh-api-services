angular.module('ovh-api-services').service('OvhApiStoreContactV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiStoreContactV6');
  const queryCache = $cacheFactory('OvhApiStoreContactV6Query');

  const contact = $resource('/store/contact/:contactId', { contactId: '@contactId' }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    get: { method: 'GET', cache },
    create: { method: 'POST', interceptor },
    update: { method: 'PUT', interceptor },
    delete: { method: 'DELETE', interceptor },
  });

  const interceptor = {
    response(response) {
      contact.resetCache();
      return response.data;
    },
  };

  contact.resetCache = function () {
    cache.removeAll();
    queryCache.removeAll();
  };

  return contact;
});
