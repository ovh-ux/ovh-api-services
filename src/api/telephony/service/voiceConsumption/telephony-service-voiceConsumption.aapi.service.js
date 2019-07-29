angular.module('ovh-api-services').service('OvhApiTelephonyServiceVoiceConsumptionAapi', ($resource, $cacheFactory) => {
  const cache = $cacheFactory('OvhApiTelephonyServiceVoiceConsumptionAapi');

  return $resource('/telephony/:billingAccount/consumption', {
    billingAccount: '@billingAccount',
  }, {
    get: {
      serviceType: 'aapi',
      isArray: false,
      cache,
    },
  });
});
