angular.module('ovh-api-services').service('OvhApiServicesFormV6', ($resource) => $resource('/services/:serviceId/form/:formName', {
  serviceId: '@serviceId',
  formName: '@formName',
}, {
  answer: {
    method: 'POST',
    url: '/services/:serviceId/form/:formName/answer',
  },
}));
