angular.module('ovh-api-services').service('OvhApiMeOrderV7', (apiv7) => {
  const userOrderEndpoint = apiv7('/me/order/:orderId', {
    orderId: '@orderId',
  });

  return userOrderEndpoint;
});
