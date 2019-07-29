angular.module('ovh-api-services').service('OvhApiMeDepositV7', (apiv7) => {
  const endpoint = apiv7('/me/deposit/:depositId', {
    depositId: '@depositId',
  });

  return endpoint;
});
