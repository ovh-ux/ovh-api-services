angular.module('ovh-api-services').service('OvhApiMeBillV7', (apiv7) => apiv7('/me/bill/:billId', {
  billId: '@billId',
}, {
  debt: {
    url: '/me/bill/:billId/debt',
    method: 'GET',
  },
}));
