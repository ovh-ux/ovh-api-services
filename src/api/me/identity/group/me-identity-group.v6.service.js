angular.module('ovh-api-services').service('OvhApiMeIdentityGroupV6', ($resource) => $resource('/me/identity/group/:group', {
  group: '@group',
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
    url: '/me/identity/group',
  },
  update: {
    method: 'PUT',
  },
  delete: {
    method: 'DELETE',
  },
}));
