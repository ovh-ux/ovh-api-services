angular.module('ovh-api-services').service('OvhApiOrderCloudProjectCreditV6', ($resource) => $resource('/order/cloud/project/:serviceName/credit', {
  serviceName: '@serviceName',
  amount: '@amount',
}, {
  get: { method: 'GET' },
  query: { method: 'GET', isArray: true },
  save: { method: 'POST' },
}));
