angular.module('ovh-api-services').service('OvhApiValidateAapi', ($resource) => $resource('/validate', {}, {
  phone: {
    url: '/validate/phone/:regionCode/:phoneNumber',
    method: 'GET',
    serviceType: 'aapi',
    isArray: false,
  },
}));
