angular.module('ovh-api-services').service('OvhApiMeIdentityUserV6', ($resource) => $resource('/me/identity/user/:user', {
  user: '@user',
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
    url: '/me/identity/user',
  },
  update: {
    method: 'PUT',
  },
  delete: {
    method: 'DELETE',
  },
  disable: {
    method: 'POST',
    url: '/me/identity/user/:user/disable',
  },
  enable: {
    method: 'POST',
    url: '/me/identity/user/:user/enable',
  },
}));
