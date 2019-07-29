angular.module('ovh-api-services').service('OvhApiTelephonyEasyHuntingHuntingQueueAgentV7', (apiv7) => {
  const endpoint = apiv7('/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/agent/:agentId', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    queueId: '@queueId',
    agentId: '@agentId',
  }, {
    getLiveStatus: {
      method: 'GET',
      url: '/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/agent/:agentId/liveStatus',
    },
  });

  return endpoint;
});
