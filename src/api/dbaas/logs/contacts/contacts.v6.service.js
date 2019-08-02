angular.module('ovh-api-services').service('OvhApiDbaasLogsContactsV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiDbaasLogsContactsV6');

  const contactsResource = $resource('/me/contact/:contactId', {
    contactId: '@contactId',
  }, {
    query: { method: 'GET', isArray: true },
    get: { method: 'GET', cache },
  });

  contactsResource.resetAllCache = function () {
    contactsResource.resetCache();
  };

  contactsResource.resetCache = function () {
    cache.removeAll();
  };

  return contactsResource;
});
