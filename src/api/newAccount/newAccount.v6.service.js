angular.module('ovh-api-services').service('OvhApiNewAccountV6', ($resource) => $resource('/newAccount', {}, {
  rules: {
    method: 'POST',
    url: '/newAccount/rules',
    isArray: true,
  },
}));
