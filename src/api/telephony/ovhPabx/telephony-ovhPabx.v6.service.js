angular.module('ovh-api-services').service('OvhApiTelephonyOvhPabxV6', ($resource, OvhApiTelephonyOvhPabx) => {
  const interceptor = {
    response(response) {
      OvhApiTelephonyOvhPabx.resetCache();
      return response.resource;
    },
  };

  const telephonyOvhPabx = $resource('/telephony/:billingAccount/ovhPabx', {
    billingAccount: '@billingAccount',
  }, {
    query: { method: 'GET', isArray: true, cache: OvhApiTelephonyOvhPabx.cache },
    get: {
      method: 'GET',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName',
      cache: OvhApiTelephonyOvhPabx.cache,
    },

    // @deprecated
    getHunting: {
      method: 'GET',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting',
      cache: OvhApiTelephonyOvhPabx.cache,
    },

    // @deprecated
    queryAgent: {
      method: 'GET',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent',
      isArray: true,
      cache: OvhApiTelephonyOvhPabx.cache,
    },

    // @deprecated
    getAgent: {
      method: 'GET',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId',
      cache: OvhApiTelephonyOvhPabx.cache,
    },

    // @deprecated
    queryQueue: {
      method: 'GET',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue',
      isArray: true,
      cache: OvhApiTelephonyOvhPabx.cache,
    },

    // @deprecated
    getQueue: {
      method: 'GET',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId',
      cache: OvhApiTelephonyOvhPabx.cache,
    },

    // @deprecated
    updateQueue: {
      method: 'PUT',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId',
      interceptor,
    },

    /*
            addQueue: {
                method:         "POST",
                url:            "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue",
                interceptor:    interceptor
            },
            */
    // @deprecated
    queryTier: {
      method: 'GET',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent',
      isArray: true,
      cache: OvhApiTelephonyOvhPabx.cache,
    },

    // @deprecated
    getTier: {
      method: 'GET',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId',
      cache: OvhApiTelephonyOvhPabx.cache,
    },

    // @deprecated
    updateTier: {
      method: 'PUT',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId',
      interceptor,
    },

    // @deprecated
    addTier: {
      method: 'POST',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId/queue',
      interceptor,
    },

    // @deprecated
    deleteTier: {
      method: 'DELETE',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId',
      interceptor,
    },
    soundUpload: {
      method: 'POST',
      url: '/telephony/:billingAccount/ovhPabx/:serviceName/soundUpload',
    },
  });

  return telephonyOvhPabx;
});
