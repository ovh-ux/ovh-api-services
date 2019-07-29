angular.module('ovh-api-services').service('OvhApiMeOvhAccountAapi', $resource => $resource('/me/ovhAccount/all', {}, {
  info: {
    method: 'GET',
    serviceType: 'aapi',
    isArray: true,
  },
}));
