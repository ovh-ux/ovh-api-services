angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingQueueLiveCallsV7', (apiv7) => {
  const endpoint = apiv7('/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveCalls/:id', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    queueId: '@queueId',
    id: '@id',
  });

  return endpoint;
});
