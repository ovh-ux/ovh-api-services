angular.module('ovh-api-services').service('OvhApiMeFaxCustomDomainsV6', $resource => $resource('/me/fax/customDomains/:id', {
  id: '@id',
}, {
  query: {
    method: 'GET',
    isArray: true,
  },
  get: {
    method: 'GET',
  },
  create: {
    method: 'POST',
  },
  remove: {
    method: 'DELETE',
  },
}));
