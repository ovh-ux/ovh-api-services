angular.module('ovh-api-services').service('OvhApiTelephonyServiceVoiceConsumptionV6', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyServiceVoiceConsumptionV6');
  const queryCache = $cacheFactory('OvhApiTelephonyServiceVoiceConsumptionV6Query');

  const voiceConsumption = $resource('/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId', {
    billingAccount: '@billingAccount',
    serviceName: '@serviceName',
    consumptionId: '@consumptionId',
  }, {
    get: {
      method: 'GET',
      cache,
    },
    getBatch: {
      method: 'GET',
      isArray: true,
      cache: queryCache,
      headers: {
        'X-Ovh-Batch': ',',
      },
    },
    query: {
      method: 'GET',
      cache: queryCache,
      isArray: true,
    },
    callDiagnostics: {
      method: 'GET',
      url: '/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId/callDiagnostics',
      cache,
    },
  });

  voiceConsumption.resetCache = function () {
    cache.removeAll();
  };

  voiceConsumption.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return voiceConsumption;
});
